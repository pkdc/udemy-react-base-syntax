import React from 'react';

const userInput = props => {
    return (
        <div>
            <input type="text"
            onChange={props.change}
            value={props.uname}
            style={props.style}/>
        </div>
    );
};

export default userInput;
