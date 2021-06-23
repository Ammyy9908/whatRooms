const intialState = {
   user:{
      name:"Sumit",
      about:"Full Stack Web Developer",
      avatar:"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?crop=faces&fit=crop&h=200&w=200&auto=compress&cs=tinysrgb"
   },
  isProfileBar:false,
  isEmojiList:false,
  isPhotoView:false,
  isCamera:false,
}

const UiReducer = (state=intialState,action)=>{
   switch(action.type){
     

      case "SET_USER":{
         return {
            ...state,
            user:action.user
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