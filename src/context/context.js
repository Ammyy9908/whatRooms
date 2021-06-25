import socketio from "socket.io-client";
import React from "react"
import dotenv from "dotenv";
import Cookies from "js-cookie";

dotenv.config();

//process.env.REACT_APP_SERVER_PROD
//https://whatrooms.herokuapp.com
export const socket = Cookies.get("GOOGLE_AUTH_TOKEN") && socketio(`https://whatrooms.herokuapp.com`,{ transports: ["websocket"] });
export const SocketContext = React.createContext();