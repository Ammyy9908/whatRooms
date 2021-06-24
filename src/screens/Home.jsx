import React from 'react'
import Sidebar from "../components/Sidebar"
import Header from "../components/Header"
import Body from "../components/Body"
import ProfileBar from '../components/ProfileBar'
import PhotoView from '../components/PhotoView'
import CameraPopUp from '../components/CameraPopUp'
import {SocketContext, socket} from '../context/context';
import axios from 'axios';
import Cookies from 'js-cookie';
import { connect } from 'react-redux'
import { setUser } from '../redux/actions/_appAction'
import { useHistory } from 'react-router-dom'

function Home(props) {
const history = useHistory()
   React.useEffect(()=>{
const fetchUser = async ()=>{
   try{
      const r = await axios.get(`https://whatrooms.herokuapp.com/auth/user`,{
         headers: {
           "Content-Type": "application/json",
           Authorization: "Bearer " + Cookies.get("GOOGLE_AUTH_TOKEN"),
         },
       });

       const {user} = r.data;

       props.setUser(user);
   }
   catch(e){
      console.log(e);
   }

   
}
Cookies.get("GOOGLE_AUTH_TOKEN")?fetchUser():history.push('/auth');
   },
   // eslint-disable-next-line
   [])
   return (
      <SocketContext.Provider value={socket}>
      <div className="app-home">
         <ProfileBar/>
         <Sidebar/>
         <Header/>
         <Body/>
         <PhotoView/>
         <CameraPopUp/>
      </div>
      </SocketContext.Provider>
   )
}


// const mapStateToProps = (state)=>({

// })

const mapDispatchToProps = (dispatch)=>({
   setUser:user=>dispatch(setUser(user))
})

export default connect(null,mapDispatchToProps)(Home)
