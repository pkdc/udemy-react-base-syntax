import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
    return (
        <div className='UserOutput'>
            <h1>Name: {props.username}</h1>
            <p>Username: {props.stateUsername}</p>
        </div>
    );
};

export default userOutput;
