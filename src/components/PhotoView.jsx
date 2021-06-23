import React from 'react'
import { connect } from 'react-redux'
import {FiX} from 'react-icons/fi'
import "./PhotoView.css"
import { setPhotoView } from '../redux/actions/_appAction'
function PhotoView(props) {


   const handlePopupClose = (e)=>{
      console.log(e.target);
      props.setPhotoView(false);
   }
   return (
      <div className={`photo-view ${props.isPhotoView && "photo-enable"}`} onClick={handlePopupClose}>
         <div className="photo-view-nav">
            <div className="photo-view-nav-left">
               <div className="photo-nav-avatar">
                  <img src={props.user.avatar} alt="user-avatar" />
               </div>
               <span>{props.user.name}</span>
            </div>
            <div className="photo-view-nav-right">
               <button onClick={()=>props.setPhotoView(false)}><FiX/></button>
            </div>
         </div>

         <div className="photo-view-body">
            <div className="photo-view-box">
               <img src={props.user.avatar} alt="user-avatar" />
            </div>
         </div>
      </div>
   )
}


const mapStateToProps = (state)=>({
   user:state.UiReducer.user,
   isPhotoView:state.UiReducer.isPhotoView
})
const mapDispatchToProps =(dispatch)=>({
   
   setPhotoView:isPhotoView=>dispatch(setPhotoView(isPhotoView))
})

export default connect(mapStateToProps,mapDispatchToProps)(PhotoView)
