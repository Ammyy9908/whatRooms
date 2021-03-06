import React,{useContext} from 'react';
import { connect } from 'react-redux';
import { SocketContext } from '../context/context';

import { setActiveChat, setEmojiList } from '../redux/actions/_appAction';
import "./Footer.css"
function SmileyIcon({fill}){
   return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill={fill} d="M9.153 11.603c.795 0 1.439-.879 1.439-1.962s-.644-1.962-1.439-1.962-1.439.879-1.439 1.962.644 1.962 1.439 1.962zm-3.204 1.362c-.026-.307-.131 5.218 6.063 5.551 6.066-.25 6.066-5.551 6.066-5.551-6.078 1.416-12.129 0-12.129 0zm11.363 1.108s-.669 1.959-5.051 1.959c-3.505 0-5.388-1.164-5.607-1.959 0 0 5.912 1.055 10.658 0zM11.804 1.011C5.609 1.011.978 6.033.978 12.228s4.826 10.761 11.021 10.761S23.02 18.423 23.02 12.228c.001-6.195-5.021-11.217-11.216-11.217zM12 21.354c-5.273 0-9.381-3.886-9.381-9.159s3.942-9.548 9.215-9.548 9.548 4.275 9.548 9.548c-.001 5.272-4.109 9.159-9.382 9.159zm3.108-9.751c.795 0 1.439-.879 1.439-1.962s-.644-1.962-1.439-1.962-1.439.879-1.439 1.962.644 1.962 1.439 1.962z"></path></svg>
}

function MicIcon(){
   return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M11.999 14.942c2.001 0 3.531-1.53 3.531-3.531V4.35c0-2.001-1.53-3.531-3.531-3.531S8.469 2.35 8.469 4.35v7.061c0 2.001 1.53 3.531 3.53 3.531zm6.238-3.53c0 3.531-2.942 6.002-6.237 6.002s-6.237-2.471-6.237-6.002H3.761c0 4.001 3.178 7.297 7.061 7.885v3.884h2.354v-3.884c3.884-.588 7.061-3.884 7.061-7.885h-2z"></path></svg>
}

function Footer(props) {
   const socket = useContext(SocketContext);

   const handleSubmit = (e)=>{


      
      if(e.key === 'Enter' || e.keyCode === 13){
         console.log({username:props.user.name,message:props.message,timestamp:new Date().getTime()});
         props.setActiveChat({useremail:props.user.email,username:props.user.name,message:props.message,timestamp:new Date().getTime()})
         socket.emit("send-message",{room:props.activeGroup,message:{useremail:props.user.email,username:props.user.name,message:props.message,timestamp:new Date().getTime()}});
         socket.emit("stop-typing",{roomid:props.activeGroup._id});
         props.setMessage('');
      }
   }


   const handleTyping = ()=>{
      socket.emit("typing",{name:props.user.name,roomid:props.activeGroup._id})
   }



   return (
      <div className="footer-chat">
         <div className="footer-content">
            {props.isEmojiList && <button className="close-emoji" onClick={()=>props.setEmojiList(false)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M19.1 17.2l-5.3-5.3 5.3-5.3-1.8-1.8-5.3 5.4-5.3-5.3-1.8 1.7 5.3 5.3-5.3 5.3L6.7 19l5.3-5.3 5.3 5.3 1.8-1.8z"></path></svg>
            </button>}
            <button onClick={()=>props.setEmojiList(!props.isEmojiList)}>
            <span><SmileyIcon fill={props.isEmojiList && "#009688"}/></span>
            </button>
            <input type="text" name="message" id="message-input" placeholder="Type a message" value={props.message} onChange={(e)=>props.setMessage(e.target.value)} onKeyUp={handleSubmit} onInput={handleTyping}/>
            <button>
               <span><MicIcon/></span>
            </button>
         </div>
      </div>
   )
}

const mapStateToProps = (state)=>({
   user:state.UiReducer.user,
   isEmojiList:state.UiReducer.isEmojiList,
   activeGroup:state.UiReducer.activeGroup,
})

const mapDispatchToProps = (dispatch)=>({
   setEmojiList:isEmojiList=>dispatch(setEmojiList(isEmojiList)),
   setActiveChat:activeGroupChat=>dispatch(setActiveChat(activeGroupChat))
})
export default connect(mapStateToProps,mapDispatchToProps)(Footer)
