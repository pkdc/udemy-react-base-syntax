import React from 'react';
import './UserOutput.css';

const userOutput = props => {
    return (
        <div>
            <h1 className='UserOutput'>{props.username}</h1>
            <p className='UserOutput'>{props.stateUsername}</p>
            <p className='UserOutput'>Blue Supergiant</p>
            <p className='UserOutput'>Red Supergiant</p>
        </div>
    );
};

export default userOutput;
