export const setProfilebar = (isProfileBar)=>({
   type:"SET_PROFILE_BAR",
   isProfileBar
})

export const setUser = (user)=>({
   type:"SET_USER",
   user
})


export const setEmojiList = (isEmojiList)=>({
   type:"SET_EMOJILIST",
   isEmojiList
})

export const setDropdown = (dropDown)=>({
   type:"SET_DROPDOWN",
   dropDown
})

export const setEmoji = (isEmoji) =>({
   type:"SET_EMOJI",
   isEmoji
})

export const setNewGroups = (newGroup)=>({
   type:"SET_NEW_GROUP",
   newGroup
})

export const setCapture = (isCapture)=>({
   type:"SET_CAPTURE",
   isCapture
})

export const removePhoto = ()=>({
   type:"REMOVE_PHOTO"
})

export const setPhotoView = (isPhotoView)=>({
   type:"SET_PHOTO_VIEW",
   isPhotoView
})

export const setCameraView = (isCamera)=>({
   type:"SET_CAMERA",
   isCamera
})

export const setGroup = (groups)=>{
   return {
      type:"SET_GROUPS",
      groups
   }
}

export const addGroup = (group)=>({
   type:"ADD_GROUP",
   group
})
export const setActiveGroup = (activeGroup)=>{
   return {
      type:"SET_ACTIVE_GROUP",
      activeGroup
   }
}

export const setActiveChat = (activeGroupChat)=>{
   return{
      type:"SET_ACTIVE_GROUP_CHAT",
      activeGroupChat
   }
}
export const setActiveChats = (activeGroupChats)=>{
   return{
      type:"SET_ACTIVE_GROUP_CHATS",
      activeGroupChats
   }
}

//SET_ACTIVE_GROUP_CHATS
