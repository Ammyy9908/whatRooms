import React from 'react'
import "./Sidebar.css";
import {FiSearch,FiEdit,FiChevronDown} from "react-icons/fi"
import { connect } from 'react-redux';
import { setActiveChats, setActiveGroup, setDropdown, setProfilebar } from '../redux/actions/_appAction';
import TopDropDown from './TopDropDown';
import {SocketContext, socket} from '../context/context';
import axios from 'axios';

// function StatusIcon(){
//    return <svg id="df9d3429-f0ef-48b5-b5eb-f9d27b2deba6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M12.072 1.761a10.05 10.05 0 0 0-9.303 5.65.977.977 0 0 0 1.756.855 8.098 8.098 0 0 1 7.496-4.553.977.977 0 1 0 .051-1.952zM1.926 13.64a10.052 10.052 0 0 0 7.461 7.925.977.977 0 0 0 .471-1.895 8.097 8.097 0 0 1-6.012-6.386.977.977 0 0 0-1.92.356zm13.729 7.454a10.053 10.053 0 0 0 6.201-8.946.976.976 0 1 0-1.951-.081v.014a8.097 8.097 0 0 1-4.997 7.209.977.977 0 0 0 .727 1.813l.02-.009z"></path><path fill="#009588" d="M19 1.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"></path></svg>
// }

function StatusOutIcon(){
   return <svg id="ee51d023-7db6-4950-baf7-c34874b80976" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M12 20.664a9.163 9.163 0 0 1-6.521-2.702.977.977 0 0 1 1.381-1.381 7.269 7.269 0 0 0 10.024.244.977.977 0 0 1 1.313 1.445A9.192 9.192 0 0 1 12 20.664zm7.965-6.112a.977.977 0 0 1-.944-1.229 7.26 7.26 0 0 0-4.8-8.804.977.977 0 0 1 .594-1.86 9.212 9.212 0 0 1 6.092 11.169.976.976 0 0 1-.942.724zm-16.025-.39a.977.977 0 0 1-.953-.769 9.21 9.21 0 0 1 6.626-10.86.975.975 0 1 1 .52 1.882l-.015.004a7.259 7.259 0 0 0-5.223 8.558.978.978 0 0 1-.955 1.185z"></path></svg>
}

const UserIcon = ()=>{
   return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 212 212" width="212" height="212"><path fill="#DFE5E7" class="background" d="M106.251.5C164.653.5 212 47.846 212 106.25S164.653 212 106.25 212C47.846 212 .5 164.654.5 106.25S47.846.5 106.251.5z"></path><path fill="#FFF" class="primary" d="M173.561 171.615a62.767 62.767 0 0 0-2.065-2.955 67.7 67.7 0 0 0-2.608-3.299 70.112 70.112 0 0 0-3.184-3.527 71.097 71.097 0 0 0-5.924-5.47 72.458 72.458 0 0 0-10.204-7.026 75.2 75.2 0 0 0-5.98-3.055c-.062-.028-.118-.059-.18-.087-9.792-4.44-22.106-7.529-37.416-7.529s-27.624 3.089-37.416 7.529c-.338.153-.653.318-.985.474a75.37 75.37 0 0 0-6.229 3.298 72.589 72.589 0 0 0-9.15 6.395 71.243 71.243 0 0 0-5.924 5.47 70.064 70.064 0 0 0-3.184 3.527 67.142 67.142 0 0 0-2.609 3.299 63.292 63.292 0 0 0-2.065 2.955 56.33 56.33 0 0 0-1.447 2.324c-.033.056-.073.119-.104.174a47.92 47.92 0 0 0-1.07 1.926c-.559 1.068-.818 1.678-.818 1.678v.398c18.285 17.927 43.322 28.985 70.945 28.985 27.678 0 52.761-11.103 71.055-29.095v-.289s-.619-1.45-1.992-3.778a58.346 58.346 0 0 0-1.446-2.322zM106.002 125.5c2.645 0 5.212-.253 7.68-.737a38.272 38.272 0 0 0 3.624-.896 37.124 37.124 0 0 0 5.12-1.958 36.307 36.307 0 0 0 6.15-3.67 35.923 35.923 0 0 0 9.489-10.48 36.558 36.558 0 0 0 2.422-4.84 37.051 37.051 0 0 0 1.716-5.25c.299-1.208.542-2.443.725-3.701.275-1.887.417-3.827.417-5.811s-.142-3.925-.417-5.811a38.734 38.734 0 0 0-1.215-5.494 36.68 36.68 0 0 0-3.648-8.298 35.923 35.923 0 0 0-9.489-10.48 36.347 36.347 0 0 0-6.15-3.67 37.124 37.124 0 0 0-5.12-1.958 37.67 37.67 0 0 0-3.624-.896 39.875 39.875 0 0 0-7.68-.737c-21.162 0-37.345 16.183-37.345 37.345 0 21.159 16.183 37.342 37.345 37.342z"></path></svg>
}




function GroupList({name,data,setActive,user,setActiveGroup,setActiveChats}){
      const [options,setOptions] = React.useState(false);
   const handleChangeGroup = (e)=>{
      console.log(e.target);

      if(data.peoples.findIndex((people)=>people.email===user.email)>-1){
         setActive(data)
         handleSwitchRoom();
         // setActiveChats(data.chats)
         socket.on("chats",(chats)=>{
            console.log("This group chats",chats);
            setActiveChats(chats)
         })
      }
   }


   const handleJoin = async ()=>{
      const {_id} = data;
         try{
            const r = await axios.put(`https://whatrooms.herokuapp.com/group/join`,{roomid:_id,user:user});
            console.log(r.data);
            const {group} = r.data;
            setActiveGroup(group);


         }
         catch(e){
            console.log(e);
         }
         
   }


   const handleSwitchRoom = ()=>{
      const {name,_id} = data;
      socket.emit("join",{user:user,name:name,id:_id});
   }
   return   <SocketContext.Provider value={socket}><div className="group-list" onClick={handleChangeGroup}>
      <div className="group-avatar">
         <UserIcon/>
      </div>
      <div className="group-info">
         <span>{name}</span>
         <span className="last-chat">last chat comes here</span>
      </div>

      <button className="chat-more" onClick={()=>setOptions(!options)}>
         <FiChevronDown className="arrow-down"/>
         <div className={`chat-more-options ${options && "chat-more-options_enable"}`}>
            <span onClick={handleJoin}>Join Group</span>
            <span>Leave Group</span>
         </div>
         </button>
   </div>
   </SocketContext.Provider>
}


function Sidebar(props) {

  
   return (
      <div className="sidebar">
         <div className="account-header">
            <div className="account-profile">
                  <div className="account-avatar" onClick={()=>props.setProfilebar(true)}>
                    { props.user && props.user.avatar?<img src={props.user && props.user.avatar.url} alt="account-avatar" />:<UserIcon/>}
                  </div>

                  <div className="profile--actions">
                     <button>
                        <StatusOutIcon/>
                        </button>
                        <button>
                           <FiEdit/>
                           </button>
                           <button onClick={()=>props.setDropdown(!props.isDropdown)}><FiChevronDown/></button>
                  </div>
            </div>
  <TopDropDown/>
         </div>

         <div className="chat-searchbar">
            <div className="chat-search-main">
               <FiSearch/> <input type="text" name="groupname" id="groupname" placeholder="Search a group"/>
            </div>
         </div>

         <div className="group-lists">
            
            {
               props.groups && props.groups.map((group,i)=>{
                  return <GroupList key={i} name={group.name} data={group} setActive={props.setActiveGroup} user={props.user} setActiveGroup={props.setActiveGroup} setActiveChats={props.setActiveChats}/>
               })
            }
         </div>
      </div>
   )
}

const mapStateToProps = (state)=>({
   user:state.UiReducer.user,
   isDropdown:state.UiReducer.dropDown,
   groups:state.UiReducer.groups
})
const mapDispatchToProps =(dispatch)=>({
   setProfilebar:isProfileBar=>dispatch(setProfilebar(isProfileBar)),
   setDropdown:isDropdown=>dispatch(setDropdown(isDropdown)),
   setActiveGroup:activeGroup=>dispatch(setActiveGroup(activeGroup)),
   setActiveChats:activeGroupChats=>dispatch(setActiveChats(activeGroupChats))
})
export default connect(mapStateToProps,mapDispatchToProps)(Sidebar)
