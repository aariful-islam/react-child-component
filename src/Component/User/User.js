import React from 'react';

const User = (props) => {
    return (
        <div style={{border:'2px solid black' ,margin:'20px'}}>
            
                <h3>username : {props.username}</h3>
                <h4>name : {props.username}</h4>
                <h4>email : {props.email}</h4>
            
            
        </div>
    );
};

export default User;