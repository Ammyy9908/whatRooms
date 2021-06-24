import React from 'react'
import {FiX,FiCamera,FiCheck} from "react-icons/fi"
import {FiRotateCw} from "react-icons/fi"
import { connect } from 'react-redux';
import { setCameraView, setCapture } from '../redux/actions/_appAction';
import "./Camera.css"
import axios from "axios";
function CameraPopUp(props) {
   const [stream,setStream] = React.useState(null);
   const [isClose,setClose] = React.useState(true);
   const videoContainer = document.querySelector('.camera-container');

   

   
   // let photo = document.querySelector('captured--image');
   const video = document.createElement('video');
   React.useEffect(()=>{
      
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

   const handleCapture = ()=>{
    
      
      let mediaStreamTrack = stream.getVideoTracks()[0];
      let imageCapture = new ImageCapture(mediaStreamTrack);
      capturePhoto(imageCapture)
   }


   const closeVideo = ()=>{
      
      stream.getVideoTracks()[0].stop();
      
      videoContainer.querySelector('video').remove();
   }
   const capturePhoto = (imageCapture)=>{
      imageCapture.takePhoto().then((blob)=>{
         console.log(blob);
         let url = URL.createObjectURL(blob);
         console.log(url)
         props.setCapture(url);
         closeVideo();
      })
   }



   const updatePhoto = async ()=>{
      try{
         const r = await axios.put(`https://whatrooms.herokuapp.com/auth/update/photo/${props.user && props.user._id}`,{url:props.isCaptured});
         console.log(r.data);
      }
      catch(e){
         console.log(e);
      }
   }


  

  
   return (
      <div className={`camera-popup ${props.isCamera && "camera-enable"}`}>
         <div className={`camera-modal ${!isClose && "camera-modal-close"}`}>
            <div className="camera-modal-header">
               <>{!props.isCaptured ?<><button onClick={closeCamera}><FiX/></button>
               <span>Take Photo</span></>:<div className="header-captured">
               <span>Save Image</span>
               <div style={{display:"flex",alignItems: "center"}}>
               <button onClick={()=>props.setCapture(false)}><FiRotateCw/></button>
               <span>Retake</span>
               </div>
               </div>}
               </>
            </div>
            <div className="camera-container">
             
                 {props.isCaptured&& <img src={props.isCaptured} alt="captured--thumb"/>}
               
               
            </div>
            <div className="camera-modal-footer">
            {!props.isCaptured ?<button className="capture-btn" onClick={handleCapture}>
            <FiCamera/>
            </button>:<button className="save-btn" onClick={updatePhoto}><FiCheck/></button>}
            </div>
         </div>
      </div>
   )
}

const mapStateToProps = (state)=>({
   user:state.UiReducer.user,
   isCamera:state.UiReducer.isCamera,
   isCaptured:state.UiReducer.isCaptured
})
const mapDispatchToProps =(dispatch)=>({
  
   setCamera:isCamera=>dispatch(setCameraView(isCamera)),
   setCapture:isCapture=>dispatch(setCapture(isCapture)),
})
export default connect(mapStateToProps,mapDispatchToProps)(CameraPopUp)
