import React from 'react'
import Sidebar from "../components/Sidebar"
import Header from "../components/Header"
import Body from "../components/Body"
import ProfileBar from '../components/ProfileBar'
import PhotoView from '../components/PhotoView'
import CameraPopUp from '../components/CameraPopUp'

function Home() {
   return (
      <div className="app-home">
         <ProfileBar/>
         <Sidebar/>
         <Header/>
         <Body/>
         <PhotoView/>
         <CameraPopUp/>
      </div>
   )
}

export default Home
