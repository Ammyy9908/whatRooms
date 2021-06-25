import React from 'react'
import "./TopDropDown.css"
import Cookies from "js-cookie";
import { useHistory } from 'react-router-dom';
import { setDropdown, setNewGroups, setProfilebar } from '../redux/actions/_appAction';
import { connect } from 'react-redux';




function TopDropDown(props) {

   const history = useHistory();

   const handleLogout = ()=>{
      Cookies.remove("GOOGLE_AUTH_TOKEN");
      props.setDropdown(false);
      history.push('/auth');
      
   }

   const handleNewGroup = ()=>{
      props.setDropdown(false);
      props.setNewGroups(true)
   }
   const handleProfile = ()=>{
      props.setDropdown(false);
      props.setProfilebar(true)
   }
   return (
      <div className={`topDropDown ${props.isDropdown && "drop-enable"}`}>
         <button onClick={handleNewGroup}>New Group</button>
         <button onClick={handleProfile}>Profile</button>
         <button>Settings</button>
         <button onClick={handleLogout}>Log out</button>
      </div>
   )
}

const mapStateToProps = (state)=>({
   
   isDropdown:state.UiReducer.dropDown
})

const mapDispatchToProps =(dispatch)=>({
   setDropdown:isDropdown=>dispatch(setDropdown(isDropdown)),
   setNewGroups:newGroup=>dispatch(setNewGroups(newGroup)),
   setProfilebar:isProfileBar=>dispatch(setProfilebar(isProfileBar)),
})
export default connect(mapStateToProps,mapDispatchToProps)(TopDropDown)
