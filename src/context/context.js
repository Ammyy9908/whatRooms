import socketio from "socket.io-client";
import React from "react"
import dotenv from "dotenv";

dotenv.config();

//process.env.REACT_APP_SERVER_PROD

export const socket = socketio(`ws://localhost:5000`,{ transports: ["websocket"] });
export const SocketContext = React.createContext();