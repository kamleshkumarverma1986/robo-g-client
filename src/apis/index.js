//PUBLIC API : https://apisetu.gov.in/public/api/cowin
// NOTE: Session will be expire after 15 mins [15 mins - time measure from when user is verified by OTP]

import moment from 'moment';
import CryptoJS from 'crypto-js';

const endPoints = {
    prodURL : "https://cdn-api.co-vin.in/api/v2/",
    stageURL : "https://api.demo.co-vin.in/api/v2/"
}
const baseURL = endPoints.prodURL;

class ValidationError extends Error {
    constructor(errorObject) {
        const {status, statusText} = errorObject;
        super(statusText || "");
        this.status = status || 0;
        this.statusText = statusText || "";
    }
}

const authorizationErrorHandling = (response) => {
    if (response.status === 401) {
        throw new ValidationError({status: response.status});
    } else if (response.status >= 200 && response.status <= 299) {
        return response.json();
    } else {
        return response.json().then(res => {
            throw new ValidationError({status: response.status, statusText: res.error});
        });
    }
}

export const getCowinData = ({ setData, setError, setFetching, calendarByWithCode, vaccineType = "ALL", token, isPublic = false }) => {
    setFetching && setFetching(true);
    return fetch(`${baseURL}appointment/sessions${isPublic?"/public":""}/${calendarByWithCode}&date=${moment().format('DD-MM-YYYY')}${vaccineType!== "ALL"?`&vaccine=${vaccineType}`:""}`, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'content-type': 'application/json',
                authorization: 'Bearer ' + token /* token is required when we search by pincode if isPublic = false */
            }
        })
        .then(response =>  response.json()) /* this is Flaky, No need of authorization Error Handling here. */
        .then((response) => {
            setData && setData(response);
        })
        .catch((error) => setError && setError(error))
        .finally(() => setFetching && setFetching(false));
};

export const getStates = ({setData, setError, setFetching}) => {
    setFetching && setFetching(true);
    return fetch(`${baseURL}admin/location/states`, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'content-type': 'application/json',
            }
        })
        .then(response =>  response.json())
        .then((response) => {
            setData && setData(response);
        })
        .catch((error) => setError && setError(error))
        .finally(() => setFetching && setFetching(false));
};

export const getDistricts = ({setData, setError, setFetching, stateId}) => {
    setFetching && setFetching(true);
    return fetch(`${baseURL}admin/location/districts/${stateId}`, {
            method: 'GET',
            mode: 'cors',
        })
        .then(response =>  response.json())
        .then((response) => {
            setData && setData(response);
        })
        .catch((error) => setError && setError(error))
        .finally(() => setFetching && setFetching(false));
};

export const generateOTP = ({setData, setError, setFetching, mobileNumber}) => {
    setFetching && setFetching(true);
    return fetch(`${baseURL}auth/generateMobileOTP`, {
            body: JSON.stringify({
                mobile: Number(mobileNumber),
                secret:
                    'U2FsdGVkX18pwWBiQpzQfppHENmneh8lQVDM+t6Riql+ilkI+4SbzMTNlFz+PaDw7VbikkICvJXqG8ba2RLzMw==',
            }),
            headers: {
                'content-type': 'application/json',
            },
            method: 'POST',
            mode: 'cors',
            credentials: 'omit',
        })
        .then(response =>  response.json())
        .then((response) => {
            setData && setData(response);
        })
        .catch((error) => setError && setError(error))
        .finally(() => setFetching && setFetching(false));
};

export const verifyOTP = ({setData, setError, setFetching, otp, txnId}) => {
    setFetching && setFetching(true);
    let otpHasKey = CryptoJS.SHA256(otp).toString(CryptoJS.enc.Hex);
    return fetch(`${baseURL}auth/validateMobileOtp`, {
            body: JSON.stringify({
                otp: otpHasKey,
                txnId: txnId,
            }),
            headers: {
                'content-type': 'application/json',
            },
            method: 'POST',
            mode: 'cors',
            credentials: 'omit',
        })
        .then(response =>  response.json())
        .then((response) => {
            setData && setData(response);
        })
        .catch((error) => setError && setError(error))
        .finally(() => setFetching && setFetching(false));
};

export const getBeneficiary = ({setData, setError, setFetching, token}) => {
    setFetching && setFetching(true);
    return fetch(`${baseURL}appointment/beneficiaries`, {
            method: 'GET',
            headers: {
                authorization: 'Bearer ' + token,
            },
            mode: 'cors',
        })
        .then(authorizationErrorHandling)
        .then((jsonResponse) => {
            setData && setData(jsonResponse);
        })
        .catch((error) => setError && setError(error))
        .finally(() => setFetching && setFetching(false));
};

export const getCaptcha = ({setData, setError, setFetching, token}) => {
    setFetching && setFetching(true);
    return fetch(`${baseURL}auth/getRecaptcha`, {
            method: 'POST',
            headers: {
                authorization: 'Bearer ' + token,
            },
            mode: 'cors',
        })
        .then(authorizationErrorHandling)
        .then((response) => {
            setData && setData(response);
        })
        .catch((error) => setError && setError(error))
        .finally(() => setFetching && setFetching(false));
};

export const bookAppointment = ({setData, setError, setFetching, token, payload}) => {
    setFetching && setFetching(true);
    return fetch(`${baseURL}appointment/schedule`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                Authorization: 'Bearer ' + token
            },
            mode: 'cors',
            body: JSON.stringify(payload),
        })
        .then(authorizationErrorHandling)
        .then((response) => {
            setData && setData(response);
        })
        .catch((error) => setError && setError(error))
        .finally(() => setFetching && setFetching(false));
};

export const aconvert = ({setData, setError, setFetching, formData}) => {
    setFetching && setFetching(true);
    return fetch(`https://s10.aconvert.com/convert/ocr-batch-win.php`, {
            method: 'POST',
            body: formData,
            mode: 'cors'
        })
        .then(response =>  response.json())
        .then((response) => {
            setData && setData(response);
        })
        .catch((error) => setError && setError(error))
        .finally(() => setFetching && setFetching(false));
};

export const fetchFileContain = ({setData, setError, setFetching, fileName}) => {
    setFetching && setFetching(true);
    return fetch(`https://s10.aconvert.com/convert/p3r68-cdx67/${fileName}`, {
            method: 'GET',
            mode: 'cors'
        })
        .then(response =>  response.text())
        .then((response) => {
            setData && setData(response);
        })
        .catch((error) => setError && setError(error))
        .finally(() => setFetching && setFetching(false));
};


