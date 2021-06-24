import React from 'react'
import "./TopDropDown.css"
import Cookies from "js-cookie";
import { useHistory } from 'react-router-dom';
import { setDropdown } from '../redux/actions/_appAction';
import { connect } from 'react-redux';




function TopDropDown(props) {

   const history = useHistory();

   const handleLogout = ()=>{
      Cookies.remove("GOOGLE_AUTH_TOKEN");
      props.setDropdown(false);
      history.push('/auth');
      
   }
   return (
      <div className={`topDropDown ${props.isDropdown && "drop-enable"}`}>
         <button>New Group</button>
         <button>Profile</button>
         <button>Settings</button>
         <button onClick={handleLogout}>Log out</button>
      </div>
   )
}

const mapStateToProps = (state)=>({
   
   isDropdown:state.UiReducer.dropDown
})

const mapDispatchToProps =(dispatch)=>({
   setDropdown:isDropdown=>dispatch(setDropdown(isDropdown))
})
export default connect(mapStateToProps,mapDispatchToProps)(TopDropDown)
