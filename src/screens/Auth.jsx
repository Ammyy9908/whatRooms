import React from 'react'
import brand from "../assets/brand.png";
// eslint-disable-next-line
import {FaGoogle,FaGithub} from "react-icons/fa"
import { GoogleLogin } from 'react-google-login';
import Cookies from "js-cookie";
import axios from "axios";
import { useHistory } from 'react-router-dom';

function Auth() {

const history = useHistory();
   const handleLogin = async (name,email,imageUrl)=>{
         try{
            const r = await axios.post(`https://whatrooms.herokuapp.com/auth/add`,{name,email,imageUrl});
            const {token} = r.data;

            Cookies.set('GOOGLE_AUTH_TOKEN',token);
            history.push('/');
         }
         catch(e){
            console.log(e);
         }
   }


  
   const responseGoogle = (response) => {
      console.log(response);
      const {name,email,imageUrl} = response.profileObj;
      handleLogin(name,email,imageUrl);
    }

   return (
      <div className="auth-screen">
         <div className="auth-box">
            <img src={brand} alt="brand-icon" />
            <div className="auth-button">
               
               {/* <button><FaGithub/> Login with Github</button> */}
               <GoogleLogin
    clientId="907442748570-rihj2qd4fv2ecvpkqbp36thrd3uqo9rr.apps.googleusercontent.com"
    render={renderProps => (
      
      <button onClick={renderProps.onClick} disabled={renderProps.disabled}><FaGoogle/>Login with Google</button>
    )}
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />
            </div>
         </div>
      </div>
   )
}

export default Auth
