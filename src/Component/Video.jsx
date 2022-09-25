import { Grid, Paper, Typography } from '@mui/material';
import { styled } from "@mui/material";
import '../App.css'
import React, { useContext } from 'react'
import { SocketContext } from '../SocketContext';



const Video = () => {
    const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);


    return (


        <div className="maindiv">
            <div className="childdiv">
                {stream && (
                    <div className="videoplayer">

                        <video className='videoplay' playsInline muted ref={myVideo} autoPlay />
                        <div className='nameo' >{name}</div>
                    </div>)}
                {callAccepted && !callEnded && (
                    <div className="videoplayer">

                        <video className='videoplay' playsInline ref={userVideo} autoPlay />
                        <div className='nameo' >{call.name}</div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Video;