import React from 'react'
import {FiX,FiCamera} from "react-icons/fi"
import { connect } from 'react-redux';
import { setCameraView } from '../redux/actions/_appAction';
import "./Camera.css"
function CameraPopUp(props) {
   const [stream,setStream] = React.useState(null);
   const [isClose,setClose] = React.useState(true);
   const videoContainer = document.querySelector('.camera-container');
   React.useEffect(()=>{
      const video = document.createElement('video');
      setClose(true);
         props.isCamera && navigator.mediaDevices.getUserMedia({video:true,audio:false}).then((stream)=>{
            setStream(stream);
               video.srcObject = stream;
               video.autoplay = true;
               video.addEventListener("loadeddata",()=>{
                  videoContainer.append(video);
               })
         })
   },
   // eslint-disable-next-line
   [props.isCamera]);





   const closeCamera = ()=>{
      setClose(false);
      setTimeout(()=>{
         stream.getVideoTracks()[0].stop();
      props.setCamera(false);
      videoContainer.querySelector('video').remove();
      },100);
   }
   return (
      <div className={`camera-popup ${props.isCamera && "camera-enable"}`}>
         <div className={`camera-modal ${!isClose && "camera-modal-close"}`}>
            <div className="camera-modal-header">
               <button onClick={closeCamera}><FiX/></button>
               <span>Take Photo</span>
            </div>
            <div className="camera-container">

            </div>
            <div className="camera-modal-footer">
            <button className="capture-btn">
            <FiCamera/>
            </button>
            </div>
         </div>
      </div>
   )
}

const mapStateToProps = (state)=>({
   isCamera:state.UiReducer.isCamera
})
const mapDispatchToProps =(dispatch)=>({
  
   setCamera:isCamera=>dispatch(setCameraView(isCamera)),
})
export default connect(mapStateToProps,mapDispatchToProps)(CameraPopUp)
