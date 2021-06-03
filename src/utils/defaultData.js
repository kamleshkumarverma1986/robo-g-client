// My MAC address for robot: 10:52:1C:02:05:4E
export const defaultMacAddress = {
    value: "",
    get data() {
      const data = localStorage?.getItem("defaultMacAddress");
      if (data) {
        return data;
      }
      return this.value;
    },
    set data(value) {
      localStorage?.setItem("defaultMacAddress", value);
    }
};