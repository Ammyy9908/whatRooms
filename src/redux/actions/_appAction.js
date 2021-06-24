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
