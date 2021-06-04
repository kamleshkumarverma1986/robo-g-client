import "./Camera.css";
import ReactPlayer from "react-player";

const Camera = () => {
    return (
        <div className='camera'>
            <ReactPlayer
                className='react-player'
                url="https://www.youtube.com/watch?v=U8Iey_wfo0I"
                width='100%'
                height='100%'
                config={{
                    youtube: {
                        playerVars: { showinfo: 1 }
                    },
                    loop: true,
                    playing: true,
                }}
            />
        </div>
    )
}
export default Camera;
