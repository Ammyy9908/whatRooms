import React from 'react'
import "./Body.css";
import EmojiList from './EmojiList';
import Footer from './Footer';

const Chat = ({message,time,type})=>{
   return <div className={`user-chat ${type==="me" && "chat-me"}`}>
      {type!=="me" ?<span className="sender__name">Sender</span>:<span className="sender__name">You</span>}
      <span>{message}</span>
      <time>16:01</time>
   </div>
}
function Body() {
   return (
      <div className="chat-body">
         <div className="chat-body-main">
            <Chat type="me" message="Hello Guys What's up"/>
            <Chat type="from" message="Hello Bhai"/>
            <Chat type="from" message="Hello Bhai"/>
            <Chat type="me" message="Hello Bhai"/>
            <Chat type="from" message="Hello Bhai"/>
            <Chat type="me" message="Hello Bhai"/>
            <Chat type="from" message="Hello Bhai"/>
            <Chat type="me" message="Hello Bhai"/>
            <Chat type="from" message="Hello Bhai"/>
            <Chat type="me" message="Hello Bhai"/>
            <Chat type="from" message="Hello Bhai"/>
            <Chat type="me" message="Hello Bhai"/>
            
         </div>
         <EmojiList/>
         <Footer/>
      </div>
   )
}

export default Body
