import React from 'react';

const userInput = (props) => {
    const style1 = {
        width: '40%',
        margin: '16px 30%',
        border: '1px solid #eee',
        boxShadow: '0 2px 2px #ccc',
        padding: '16px',
        textAlign: 'center',
        fontWeight: 'bold'
    }

    return (
            <input type="text"
            onChange={props.change}
            value={props.uname}
            style={style1}/>
    );
};

export default userInput;
