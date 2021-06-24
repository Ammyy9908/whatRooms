const intialState = {
   user:null,
  isProfileBar:false,
  isEmojiList:false,
  isPhotoView:false,
  isCamera:false,
  isCaptured:false,
  dropDown:false
}

const UiReducer = (state=intialState,action)=>{
   switch(action.type){
     

      case "SET_USER":{
         return {
            ...state,
            user:action.user
         }
      }
      case "SET_DROPDOWN":{
         return{
            ...state,
            dropDown:action.dropDown
         }
      }
      case "SET_CAPTURE":{
         return{
            ...state,
            isCaptured:action.isCapture
         }
      }

      case "REMOVE_PHOTO":{
         if(state.user)
         
         {state.user.avatar = null;
         }
         return{
            ...state,
            
         }
      }
      case "SET_PHOTO_VIEW":{
         return {
            ...state,
            isPhotoView:action.isPhotoView
         }
      }

      case "SET_CAMERA":{
         return{
            ...state,
            isCamera:action.isCamera
         }
      }

      case "SET_PROFILE_BAR":{
         return {
            ...state,
            isProfileBar:action.isProfileBar
         }
      }

      case "SET_EMOJILIST":{
         return {
            ...state,
            isEmojiList:action.isEmojiList
         }
      }

     

      default:{
         return state
      }
   }
}

export default UiReducer;