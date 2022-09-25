import React, { useState, useContext } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { SocketContext } from '../SocketContext';

const Option = ({ children }) => {
    const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } = useContext(SocketContext);
    const [idToCall, setIdToCall] = useState('');

    return (
        <>
            <div className='mainbox' >

                <div className='meid' >
                    <span className='meidname' >Enter your name</span>
                    <input className='inputidme' onChange={(e) => setName(e.target.value)}  ></input>
                    <CopyToClipboard text={me} >

                        <button className='buttoncopy' >Copy to clipboard</button>
                    </CopyToClipboard>
                </div>
                <div className='meid' >
                    <span className='meidname' >Id to Call</span>
                    <input className='inputidmeother' spellCheck="false" cursor="none" onChange={(e) => setIdToCall(e.target.value)}  ></input>
                    {callAccepted && !callEnded ? (
                        <button onClick={leaveCall} className="leavecall">
                            Hang Up
                        </button>
                    ) : (
                        <button onClick={() => callUser(idToCall)} className="acceptcall">
                            Call
                        </button>
                    )}


                </div>
            </div>

        </>


    );
};

export default Option;