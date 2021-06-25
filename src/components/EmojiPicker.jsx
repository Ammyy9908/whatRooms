import React from 'react'
import axios from 'axios';
import "./EmojiPicker.css"

import { setEmoji } from '../redux/actions/_appAction';
import { connect } from 'react-redux';
function EmojiPicker(props) {
   const [indicator,setIndicator] = React.useState(0);
   const [emojis,setEmojis] = React.useState(null);
   const [hide,setHide] = React.useState(false);
   React.useEffect(()=>{
      const getEmoji = async ()=>{
         try{
            const r = await axios.get(`https://raw.githubusercontent.com/github/gemoji/master/db/emoji.json`);
            console.log(r.data);
            setEmojis(r.data);
         }
         catch(e){
            console.log(e);
         }
      }
      getEmoji();
   },[])


   const checkHidden = (scrollTop)=>{
      if(scrollTop>80){
         return setHide(true);
      }
      if(scrollTop<80){
         return setHide(false);
      }
   }
   const handleIndicator = (e)=>{
      
      checkHidden(e.target.scrollTop);
      console.log(e.target.scrollTop);
      if(e.target.scrollTop<=2245){
        return  setIndicator(0);
      }
      if(e.target.scrollTop>2245 && e.target.scrollTop<=2892){
         return setIndicator(100);
      }
      if(e.target.scrollTop>2892 && e.target.scrollTop <=3510){
         return setIndicator(200);
      }
      if(e.target.scrollTop > 3510 && e.target.scrollTop<=3952){
         return setIndicator(300);
      }
      if(e.target.scrollTop>3952 && e.target.scrollTop <=4963){
         return setIndicator(400);
      }
      if(e.target.scrollTop>4963 && e.target.scrollTop<=6112){
         return setIndicator(500);
      }
      if(e.target.scrollTop>6112 && e.target.scrollTop<=7126){
         return setIndicator(600);
      }
      if(e.target.scrollTop>7127){
         return setIndicator(700);
      }
      
      
   }
   return (
      <div className={`emoji-picker ${props.isEmoji && "emoji-picker-enable"}`}>
         <div className="emoji-picker-tabs">
         {/* <div className="active-tab-indicator-picker" style={{transform:`translateX(${indicator}%)`}}></div> */}
            
            <div className="tab" role="button" title="Smileys & People"><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill={indicator===0 && "#009688"} d="M12 22.1C6.4 22.1 1.9 17.6 1.9 12S6.4 1.9 12 1.9 22.1 6.4 22.1 12 17.6 22.1 12 22.1zm0-18.6c-4.7 0-8.5 3.8-8.5 8.5s3.8 8.5 8.5 8.5 8.5-3.8 8.5-8.5-3.8-8.5-8.5-8.5z"></path><path fill={indicator===0 && "#009688"} d="M8.9 11.6c.7 0 1.3-.7 1.3-1.5s-.6-1.5-1.3-1.5-1.3.7-1.3 1.5.6 1.5 1.3 1.5zM17.1 13.6c-1.1.1-3 .4-5 .4s-4-.3-5-.4c-.4 0-.6.3-.4.7 1.1 2 3.1 3.5 5.5 3.5 2.3 0 4.4-1.5 5.5-3.5.1-.3-.2-.7-.6-.7zM12.3 16c-2.6 0-4.1-1-4.2-1.6 0 0 4.4.9 8 0 0 0-.5 1.6-3.8 1.6zM15.1 11.6c.7 0 1.3-.7 1.3-1.5s-.6-1.5-1.3-1.5-1.3.7-1.3 1.5.6 1.5 1.3 1.5z"></path></svg></span></div>
            <div className="tab" role="button" title="Animals & Nature"><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill={indicator===100 && "#009688"} d="M7.2 12.2c.608 0 1.1.627 1.1 1.4S7.808 15 7.2 15s-1.1-.627-1.1-1.4.492-1.4 1.1-1.4zm9.7 0c.608 0 1.1.627 1.1 1.4s-.492 1.4-1.1 1.4-1.1-.627-1.1-1.4.492-1.4 1.1-1.4zm4.6-1.1l-1.2-2.4c.9-.4 1.7-1.3 2-2.2.3-.7.4-2.1-1-3.5-1-.9-2-1.2-2.9-1-1.1.3-1.9 1.2-2.3 1.9-1.4-.7-2.9-.8-4.1-.8-1.5 0-2.8.3-4 .9-.5-.9-1.2-1.8-2.3-2.1-1-.2-2 .1-2.9 1-1 1-1.4 2.2-1 3.4.4 1.1 1.2 1.9 2 2.3-.2.5-.4 1-.6 1.6l-.2.2c-.3.7-.5 1.3-.8 1.9-.4 1-.9 1.9-.9 3.1 0 1.6.8 6.7 10.5 6.7 3.8 0 6.6-.7 8.5-2.2s2.2-3.4 2.2-4.3c.2-2.1-.2-2.9-1-4.5zm-2.7-7.6c.4-.1.9.1 1.5.6.6.6.8 1.2.6 1.8-.2.6-.7 1.1-1.2 1.3-.6-1.2-1.3-2-2.1-2.6.2-.4.6-1 1.2-1.1zM3.3 5.9c-.2-.6 0-1.2.6-1.8.5-.5 1.1-.7 1.5-.6.5.1 1.1.7 1.3 1.2-.9.7-1.6 1.5-2.2 2.6C4 7 3.4 6.5 3.3 5.9zm17.8 9.7c0 .7-.2 2-1.6 3.1-1.5 1.2-4.1 1.8-7.5 1.8-8.3 0-8.9-3.9-8.9-5.1 0-.8.3-1.5.7-2.4.3-.6.6-1.2.8-2.1l.1-.2c.5-1.5 2-6.2 7.3-6.2 1.2 0 2.5.2 3.7.9.1.1.5.3.5.3.9.7 1.7 1.7 2.4 3.2.6 1.3 1 2.2 1.4 2.9.8 1.6 1.1 2.1 1.1 3.8zM14.6 17c-.1.1-.6.4-1.2.3-.4-.1-.7-.3-.9-.8 0-.1-.1-.1-.1-.2.8-.1 1.3-.6 1.3-1.3s-.7 0-1.7 0c-.9 0-1.7-.7-1.7 0 0 .6.6 1.2 1.4 1.3l-.1.1c-.3.4-.5.7-.9.8-.5.1-1.1-.1-1.3-.3-.2-.2-.5-.1-.7.1s-.1.5.1.7c.1.1.8.5 1.6.5.2 0 .4 0 .5-.1.4-.1.8-.3 1.1-.7.4.4.9.6 1.2.7.8.2 1.7-.2 2-.5.2-.2.2-.5 0-.7-.1 0-.4-.1-.6.1z"></path></svg></span></div>
            <div className="tab" role="button" title="Food & Drink"><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill={indicator===200 && "#009688"} d="M7.4 11.4c-.4 0-.8.4-.8.8V14c0 .4.4.8.8.8s.8-.4.6-.8v-1.8c0-.6-.2-.8-.6-.8zM4.6 10.4c-.4 0-.8.4-.8.8V15c0 .4.4.8.8.8s.8-.4.8-.8v-3.8c0-.6-.4-.8-.8-.8z"></path><path fill={indicator===200 && "#009688"} d="M23 7.2c-.6-.6-1.6-.8-2.8-.6-.2 0-.4.2-.6.2V4.2c0-.6-.6-1.2-1.2-1.2h-17C.8 3 .2 3.6.2 4.2v7.4c0 5.4 3.2 9.6 8.4 9.6h2.2c4.2 0 7-2.6 8-6h.4c2.2-.4 4-2.6 4.4-4.8.4-1.4.2-2.4-.6-3.2zm-4.8-2.8v3H1.6v-3h16.6zM11 19.8H8.8c-5.2 0-7-4.4-7-8.2V8.8h16.6v2.8c-.2 4-2.4 8.2-7.4 8.2zm8.4-6.2c.2-.6.2-1.4.2-2V8.4c.4-.2.6-.4 1-.4.6-.2 1.2 0 1.4.4.4.4.6 1 .4 1.8-.2 1.4-1.6 3-3 3.4z"></path></svg></span></div>
            <div className="tab" role="button" title="Activity"><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill={indicator===300 && "#009688"} d="M14.8 15.3l1.3-3.8c.1-.2 0-.5-.2-.6l-3.3-2.4c-.2-.1-.5-.1-.6 0l-3.3 2.4c-.2.1-.3.4-.2.6l1.3 3.8c.1.2.3.4.5.4h4c.2 0 .4-.2.5-.4z"></path><path fill={indicator===300 && "#009688"} d="M12 1.9C6.4 1.9 1.9 6.4 1.9 12S6.4 22.1 12 22.1 22.1 17.6 22.1 12 17.6 1.9 12 1.9zM9.8 20.3c.1-.2.1-.4 0-.6l-1.4-2.3c-.1-.1-.2-.2-.4-.3l-2.5-.6c-.2-.1-.5.1-.6.2-.9-1.3-1.4-2.9-1.5-4.5.2 0 .4 0 .5-.2l1.7-2c.1 0 .2-.2.2-.3l-.3-2.6c0-.2-.1-.3-.3-.4C6.2 5.4 7.5 4.5 9 4c0 .1.2.3.3.3l2.5 1.1c.1.1.3.1.4 0l2.5-1.1.3-.3c1.5.6 2.7 1.5 3.7 2.7-.1.1-.2.2-.2.4l-.2 2.6c0 .2 0 .3.1.4l1.7 2c.1.1.3.2.4.2 0 1.6-.5 3.1-1.3 4.4-.1-.1-.2-.1-.4-.1l-2.5.6c-.1 0-.3.1-.4.3l-1.4 2.3c-.1.2-.1.3 0 .5-.8.2-1.6.4-2.5.4-.7-.1-1.5-.2-2.2-.4z"></path></svg></span></div>
            <div className="tab" role="button" title="Travel & Places"><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill={indicator===400 && "#009688"} d="M21.5 11.5c0-.7-.1-1.4-.3-2l-1.5-4.3C19.2 3.9 18 3 16.6 3H7.3c-1.4 0-2.6.9-3.1 2.2L2.6 9.9c-.1.4-.2.7-.2 1.1v8.6c0 .6.5 1.1 1.1 1.1h1.1c.6 0 1.1-.5 1.1-1.1v-1.1h12.7v1.1c0 .6.5 1.1 1.1 1.1h1.1c.6 0 1.1-.5 1.1-1.1v-7.4l-.2-.7zM4.1 10.4l1.6-4.7c.2-.7.9-1.2 1.7-1.2h9.2c.7 0 1.4.5 1.6 1.2l1.5 4.3c.1.3.2.6.2.8H4c-.1-.1 0-.3.1-.4zm1.4 5.7c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5c-.1.8-.7 1.5-1.5 1.5zm9.4-.6H9.3c-.5 0-1-.4-1-1 0-.5.4-1 1-1h5.6c.5 0 1 .4 1 1-.1.6-.5 1-1 1zm3.7.6c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5z"></path></svg></span></div>
            <div className="tab" role="button" title="Objects"><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill={indicator===500 && "#009688"} d="M18.8 6.7c-.9-2.6-3.2-4.6-6-4.9h-1.6c-2.8.3-5.1 2.2-6 4.9-1 3 .1 6.2 2.7 8H8c.2.1.3.4.3.6v2c0 .8.6 1.4 1.4 1.4h4.6c.8 0 1.4-.6 1.4-1.4v-2c0-.2.1-.5.3-.6l.1-.1c2.5-1.8 3.6-5 2.7-7.9zm-3.5 6.9l-.1.1c-.5.4-.9 1-.9 1.7v2s0 .1-.1.1H9.8s-.1 0-.1-.1v-2c0-.7-.3-1.3-.9-1.7l-.1-.1c-2-1.4-3-4-2.2-6.5.7-2.1 2.6-3.7 4.9-3.9H12.7c2.2.2 4.2 1.8 4.9 3.9.7 2.4-.2 5-2.3 6.5zM9.2 21.2c0 .6.5 1 1 1h3.7c.6 0 1-.5 1-1v-1H9.2v1z"></path><path fill={indicator===500 && "#009688"} d="M13.6 10.5c-.4 0-.8.3-.8.8 0 .1 0 .2.1.3-.2.3-.5.5-.8.5s-.6-.2-.8-.5c0-.1.1-.2.1-.3 0-.4-.3-.8-.8-.8-.4 0-.8.3-.8.8 0 .4.3.7.7.8.3.4.7.7 1.1.8V15c0 .2.2.4.4.4s.4-.2.4-.4v-2.1c.4-.1.8-.4 1.1-.8.4 0 .8-.3.8-.8s-.3-.8-.7-.8z"></path></svg></span></div>
            <div className="tab" role="button" title="Symbols"><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill={indicator===600 && "#009688"} d="M14.5 12.9V11h2.2l-.2-1.3h-2V7.3H13v2.5h-2V7.4H9.5v2.4H7.2l.2 1.2h2.1v1.9H7.3l.2 1.3h2v2.4H11v-2.4h2v2.4h1.5v-2.4h2.3l-.2-1.3h-2.1zM11 11h2v1.9h-2V11z"></path><path fill={indicator===600 && "#009688"} d="M16.1 2.6H7.9C5 2.6 2.6 5 2.6 7.9V16c0 3 2.4 5.3 5.3 5.3H16c3 0 5.3-2.4 5.3-5.3V7.9c.1-2.9-2.3-5.3-5.2-5.3zm3.7 13.5c0 2.1-1.6 3.8-3.7 3.8H7.9c-2.1 0-3.8-1.7-3.8-3.8V7.9c0-2.1 1.7-3.8 3.8-3.8H16c2.1 0 3.8 1.7 3.8 3.8v8.2z"></path></svg></span></div>
            <div className="tab" role="button" title="Flags"><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill={indicator===700 && "#009688"} d="M5.5 3.8v-.2c0-.3-.2-.5-.5-.5h-.5c-.3 0-.5.2-.5.5V21c0 .3.2.5.5.5H5c.3 0 .5-.2.5-.5v-6.2c5 1.8 9.3-2.7 14.5.6V4.1C14.9 1 10.3 5.6 5.5 3.8zm10.3 8.8c-1.4 0-2.8.3-4.1.6-1.2.3-2.4.5-3.5.5-.9 0-1.8-.2-2.6-.5V5.4c.8.2 1.5.3 2.3.3 1.5 0 2.9-.4 4.3-.7 1.3-.3 2.5-.6 3.8-.6.9 0 1.7.2 2.5.5V13c-.9-.2-1.8-.4-2.7-.4z"></path></svg></span></div>
         </div>

         <div className={`emoji-searchbar ${hide && "hide_search"}`}>
            <input type="text" name="emojikey" id="emojikey" placeholder="Search Emoji"/>
         </div>

         <div className={`emoji-picker-list-main ${hide && "emoji-picker-list-main-large"}`} onScroll={handleIndicator}>
         <div className="smiley--header" id="people">
               <h3>Smiley & Peoples</h3>
            </div>
            <div className="eomji-smileys">

               {
                  emojis && emojis.filter((emoji)=>emoji.category==="Smileys & Emotion" || emoji.category==="People & Body").map((emoji,i)=>{
                     return  <span onClick={()=>props.setSubject(props.subject+emoji.emoji+" ")}>{emoji.emoji}</span>
                  })
               }
            </div>
            <div className="smiley--header" id="animals">
               <h3>Animals & Nature</h3>
            </div>
            <div className="eomji-smileys">

               {
                  emojis && emojis.filter((emoji)=>emoji.category==="Animals & Nature").map((emoji,i)=>{
                     return  <span onClick={()=>props.setSubject(props.subject+emoji.emoji+" ")}>{emoji.emoji}</span>
                  })
               }
            </div>
            <div className="smiley--header" id="food">
               <h3>Food & Drinks</h3>
            </div>
            <div className="eomji-smileys">

               {
                  emojis && emojis.filter((emoji)=>emoji.category==="Food & Drink").map((emoji,i)=>{
                     return  <span onClick={()=>props.setSubject(props.subject+emoji.emoji+" ")}>{emoji.emoji}</span>
                  })
               }
            </div>

            <div className="smiley--header" id="activity">
               <h3>Activity</h3>
            </div>
            <div className="eomji-smileys">

               {
                  emojis && emojis.filter((emoji)=>emoji.category==="Activities").map((emoji,i)=>{
                     return  <span onClick={()=>props.setSubject(props.subject+emoji.emoji+" ")}>{emoji.emoji}</span>
                  })
               }
            </div>
            <div className="smiley--header" id="travel">
               <h3>Travel & Places</h3>
            </div>
            <div className="eomji-smileys">

               {
                  emojis && emojis.filter((emoji)=>emoji.category==="Travel & Places").map((emoji,i)=>{
                     return <span onClick={()=>props.setSubject(props.subject+emoji.emoji+" ")}>{emoji.emoji}</span>
                  })
               }
            </div>
            <div className="smiley--header" id="object">
               <h3>Objects</h3>
            </div>
            <div className="eomji-smileys">

               {
                  emojis && emojis.filter((emoji)=>emoji.category==="Objects").map((emoji,i)=>{
                     return  <span onClick={()=>props.setSubject(props.subject+emoji.emoji+" ")}>{emoji.emoji}</span>
                  })
               }
            </div>
            <div className="smiley--header" id="symbols">
               <h3>Symbols</h3>
            </div>
            <div className="eomji-smileys">

               {
                  emojis && emojis.filter((emoji)=>emoji.category==="Symbols").map((emoji,i)=>{
                     return <span onClick={()=>props.setSubject(props.subject+emoji.emoji+" ")}>{emoji.emoji}</span>
                  })
               }
            </div>
            <div className="smiley--header" id="flag">
               <h3>Flags</h3>
            </div>
            <div className="eomji-smileys">

               {
                  emojis && emojis.filter((emoji)=>emoji.category==="Flags").map((emoji,i)=>{
                     return  <span onClick={()=>props.setSubject(props.subject.length>0?props.subject+emoji.emoji:emoji.emoji)}>{emoji.emoji}</span>
                  })
               }
            </div>
         </div>

      </div>
   )
}

const mapStateToProps = (state)=>({
   isEmoji:state.UiReducer.isEmoji
})
const mapDispatchToProps =(dispatch)=>({
   setEmoji:isEmoji=>dispatch(setEmoji(isEmoji))
})
export default connect(mapStateToProps,mapDispatchToProps)(EmojiPicker)
