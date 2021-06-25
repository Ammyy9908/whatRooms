import React from 'react'
import "./NewGroupBar.css"
import {FiArrowLeft,FiCheck} from "react-icons/fi";
import EmojiPicker from './EmojiPicker';
import axios from 'axios';
import { addGroup, setEmoji, setNewGroups } from '../redux/actions/_appAction';
import { connect } from 'react-redux';
const UserIcon = ()=>{
   return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 212 212" width="212" height="212"><path fill="#DFE5E7" class="background" d="M106.251.5C164.653.5 212 47.846 212 106.25S164.653 212 106.25 212C47.846 212 .5 164.654.5 106.25S47.846.5 106.251.5z"></path><path fill="#FFF" class="primary" d="M173.561 171.615a62.767 62.767 0 0 0-2.065-2.955 67.7 67.7 0 0 0-2.608-3.299 70.112 70.112 0 0 0-3.184-3.527 71.097 71.097 0 0 0-5.924-5.47 72.458 72.458 0 0 0-10.204-7.026 75.2 75.2 0 0 0-5.98-3.055c-.062-.028-.118-.059-.18-.087-9.792-4.44-22.106-7.529-37.416-7.529s-27.624 3.089-37.416 7.529c-.338.153-.653.318-.985.474a75.37 75.37 0 0 0-6.229 3.298 72.589 72.589 0 0 0-9.15 6.395 71.243 71.243 0 0 0-5.924 5.47 70.064 70.064 0 0 0-3.184 3.527 67.142 67.142 0 0 0-2.609 3.299 63.292 63.292 0 0 0-2.065 2.955 56.33 56.33 0 0 0-1.447 2.324c-.033.056-.073.119-.104.174a47.92 47.92 0 0 0-1.07 1.926c-.559 1.068-.818 1.678-.818 1.678v.398c18.285 17.927 43.322 28.985 70.945 28.985 27.678 0 52.761-11.103 71.055-29.095v-.289s-.619-1.45-1.992-3.778a58.346 58.346 0 0 0-1.446-2.322zM106.002 125.5c2.645 0 5.212-.253 7.68-.737a38.272 38.272 0 0 0 3.624-.896 37.124 37.124 0 0 0 5.12-1.958 36.307 36.307 0 0 0 6.15-3.67 35.923 35.923 0 0 0 9.489-10.48 36.558 36.558 0 0 0 2.422-4.84 37.051 37.051 0 0 0 1.716-5.25c.299-1.208.542-2.443.725-3.701.275-1.887.417-3.827.417-5.811s-.142-3.925-.417-5.811a38.734 38.734 0 0 0-1.215-5.494 36.68 36.68 0 0 0-3.648-8.298 35.923 35.923 0 0 0-9.489-10.48 36.347 36.347 0 0 0-6.15-3.67 37.124 37.124 0 0 0-5.12-1.958 37.67 37.67 0 0 0-3.624-.896 39.875 39.875 0 0 0-7.68-.737c-21.162 0-37.345 16.183-37.345 37.345 0 21.159 16.183 37.342 37.345 37.342z"></path></svg>
}

function SmileyIcon({fill}){
   return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill={fill} d="M9.153 11.603c.795 0 1.439-.879 1.439-1.962s-.644-1.962-1.439-1.962-1.439.879-1.439 1.962.644 1.962 1.439 1.962zm-3.204 1.362c-.026-.307-.131 5.218 6.063 5.551 6.066-.25 6.066-5.551 6.066-5.551-6.078 1.416-12.129 0-12.129 0zm11.363 1.108s-.669 1.959-5.051 1.959c-3.505 0-5.388-1.164-5.607-1.959 0 0 5.912 1.055 10.658 0zM11.804 1.011C5.609 1.011.978 6.033.978 12.228s4.826 10.761 11.021 10.761S23.02 18.423 23.02 12.228c.001-6.195-5.021-11.217-11.216-11.217zM12 21.354c-5.273 0-9.381-3.886-9.381-9.159s3.942-9.548 9.215-9.548 9.548 4.275 9.548 9.548c-.001 5.272-4.109 9.159-9.382 9.159zm3.108-9.751c.795 0 1.439-.879 1.439-1.962s-.644-1.962-1.439-1.962-1.439.879-1.439 1.962.644 1.962 1.439 1.962z"></path></svg>
}

function NewGroupBar(props) {
   const [subject,setSubject] = React.useState('');



   const handleNewGroup = async ()=>{
      try{
         const r = await axios.post(`https://what-rooms.vercel.app/group/add`,{name:subject,admin:props.user && props.user,imageUrl:null});
         console.log(r.data);
         if(r.data.error){
            return console.log(r.data.message);
         }
         const {groups} = r.data;
         console.log(groups);
         props.addGroup(groups[groups.length-1]);
         props.setNewGroups(false);
         setSubject('');
         props.setEmoji(false);
      }
      catch(e){
         console.log(e);
      }
   }

   return (
      <div className={`new-group-bar ${props.newGroup && "new-group-enable"}`}>
         <div className="new-group-header">
            <div className="header-group-content">
               <button onClick={()=>props.setNewGroups(false)}><FiArrowLeft/></button>
               <span>New Group</span>
            </div>
         </div>

         <div className="new-group-form">
            <div className="avatar-new-group">
            <div className="new-group-avatar">
               <UserIcon/>
            </div>
            </div>

            <div className="text-field">
               <label htmlFor="groupName">Group Subject</label>
               <div className="form-field">
                  <input type="text" name="groupName" id="groupName" value={subject} onChange={(e)=>setSubject(e.target.value)} maxLength="25"/>
                  <span>{25-parseInt(subject.length)}</span>
                  <button onClick={()=>props.setEmoji(!props.isEmoji)}>
                     <EmojiPicker subject={subject} setSubject={setSubject}/>
                  <SmileyIcon fill="#ccc"/>
               </button>
               </div>
            
               <div className={`form-submit-button-wrapper`}>
                  <button className={`${subject.length>0 && "submit-button-enable"}`} onClick={subject.length>6 && handleNewGroup}><FiCheck/></button>
               </div>
            </div>
         </div>
         <div className="new-group-blank"></div>
      </div>
   )
}
const mapStateToProps = (state)=>({
   isEmoji:state.UiReducer.isEmoji,
   newGroup:state.UiReducer.newGroup,
   user:state.UiReducer.user,
})
const mapDispatchToProps =(dispatch)=>({
   setEmoji:isEmoji=>dispatch(setEmoji(isEmoji)),
   setNewGroups:newGroup=>dispatch(setNewGroups(newGroup)),
   addGroup:group=>dispatch(addGroup(group))
})
export default connect(mapStateToProps,mapDispatchToProps)(NewGroupBar)
