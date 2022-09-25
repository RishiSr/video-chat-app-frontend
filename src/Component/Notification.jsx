import React, { useContext } from 'react';
import { Button } from '@mui/material';
import { SocketContext } from '../SocketContext';


const Notification = () => {
    const { answerCall, call, callAccepted, leaveCall } = useContext(SocketContext);

    return (
        <>
            {call.isReceivingCall && !callAccepted && (
                <div className='popup'>

                    <h1>{call.name || "Someone"} is calling:</h1>
                    <button className='buttonanswer' onClick={answerCall}>
                        Answer
                    </button>
                    <button onClick={leaveCall} className="buttonhangup">
                        Reject
                    </button>
                </div>
            )}
        </>
    );
};

export default Notification;