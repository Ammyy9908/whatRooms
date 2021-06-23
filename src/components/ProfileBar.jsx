import React from 'react'
import {FiEdit2,FiArrowLeft,FiCamera} from "react-icons/fi";
import { connect } from 'react-redux';
import { setCameraView, setPhotoView, setProfilebar } from '../redux/actions/_appAction';
import "./ProfileBar.css"


function ProfileBar(props) {
   const [x,setX] = React.useState(0);
   const [y,setY] = React.useState(0);
   const [isPopup,setPopup] = React.useState(false);
   /** <div className="popover-options">
                        <span>View Photo</span>
                        <span>Take Photo</span>
                        <span>Upload Photo</span>
                        <span>Remove Photo</span>
                     </div> */



                     const handlePopup = (e)=>{
                        let x = (e.clientX - e.target.offsetLeft)/2;
                        let y = (e.clientY - e.target.offsetTop)/2;
                        setX(x);
                        setY(y);
                        setPopup(!isPopup)
                     }
   console.log(props)



   const handlePhotoView = ()=>{
   props.setPhotoView(true);
   setPopup(false);
   }

   const handleCamera = ()=>{
      props.setCamera(true);
      setPopup(false);
   }
   return (
      <div className={`profileBar ${props.isProfileBar && "profileBarEnable"}`}>
         <div className="profile--header">
            <div className="profile--header--name">
               <button onClick={()=>props.setProfilebar(false)}><FiArrowLeft/></button>
               <span>Profile</span>
            </div>
         </div>
         <div className="profile-body">
            <div className="profile--body--top">
            {props.isProfileBar && <div className={`profile--avatar--big ${props.isPhotoView && "borderedAvatar"}`}>
               <img src={props.user.avatar} alt="user-avatar" />
               <div className="profile-big-avatar--popover" onClick={handlePopup}>
                  <div className="popover-content">
                     <FiCamera/>
                     <span>CHANGE PROFILE PHOTO</span>
                    
                    
                  </div>
               </div>
               <div className={`popover-options ${isPopup &&"popup-enable"}`} style={{left:x+"px",top:y+"px"}}>
                        <span onClick={handlePhotoView}>View Photo</span>
                        <span onClick={handleCamera}>Take Photo</span>
                        <span>Upload Photo</span>
                        <span>Remove Photo</span>
                     </div>
            </div>}
            </div>
           { props.isProfileBar &&<div className="profile--forms">
            <div className="profile--name--form">
               <div className="text-field">
               <label htmlFor="name">Your Name</label>
               <div className="form-field">
               <input type="text" name="name" id="name" value={props.user.name}/>
               <button>
                  <FiEdit2/>
               </button>
               </div>
               </div>
            </div>
            <div className="profile--about--form">
            <div className="text-field">
               <label htmlFor="name">About</label>
               <div className="form-field">
               <input type="text" name="name" id="name" value={props.user.about}/>
               <button>
                  <FiEdit2/>
               </button>
               </div>
               </div>
            </div>
            </div>}
         </div>
      </div>
   )
}

const mapStateToProps = (state)=>({
   isProfileBar:state.UiReducer.isProfileBar,
   user:state.UiReducer.user,
   isPhotoView:state.UiReducer.isPhotoView
})
const mapDispatchToProps =(dispatch)=>({
   setProfilebar:isProfileBar=>dispatch(setProfilebar(isProfileBar)),
   setPhotoView:isPhotoView=>dispatch(setPhotoView(isPhotoView)),
   setCamera:isCamera=>dispatch(setCameraView(isCamera)),
})
export default connect(mapStateToProps,mapDispatchToProps)(ProfileBar)
