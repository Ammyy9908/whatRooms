import React,{useContext} from 'react'
import { connect } from 'react-redux';
import { SocketContext } from '../context/context';
import { setActiveChat } from '../redux/actions/_appAction';
import "./Body.css";
import EmojiList from './EmojiList';
import Footer from './Footer';
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
import ReactTimeAgo from 'react-time-ago'
TimeAgo.addDefaultLocale(en)

const Chat = ({message,time,type,username})=>{
   return <div className={`user-chat ${type==="me" && "chat-me"}`}>
      {type!=="me" ?<span className="sender__name">{username}</span>:<span className="sender__name">You</span>}
      <span>{message}</span>
      <ReactTimeAgo date={parseInt(time)} locale="en-US" timeStyle="twitter"/>
   </div>
}
function Body(props) {
   const socket = useContext(SocketContext);
   
   const [message,setMessage] = React.useState('');

   React.useEffect(()=>{
      //listen message changes
   socket.on("chat-message",(message)=>{
      console.log("Running message listener!");
      console.log("Incoming chat message is",message);
      props.setActiveChat(message);
   })
   },
   // eslint-disable-next-line
   [])
   
   return (
     <> {props.activeGroup && <div className="chat-body">
         <div className="chat-body-main">
            
            
            {props.activeGroupChats.map((message,i)=>{
               return <Chat type={message.useremail===props.user.email?"me":"from"} message={message.message} username={message.username} key={i} time={message.timestamp}/>
            })}
            
         </div>
         <EmojiList/>
         <Footer setMessage={setMessage} message={message}/>
      </div>}</>
   )
}


const mapStateToProps = (state)=>({
   user:state.UiReducer.user,
   activeGroup:state.UiReducer.activeGroup,
   activeGroupChats:state.UiReducer.activeGroupChats
   
})
const mapDispatchToProps =(dispatch)=>({
   setActiveChat:activeGroupChat=>dispatch(setActiveChat(activeGroupChat))
})
export default connect(mapStateToProps,mapDispatchToProps)(Body)
