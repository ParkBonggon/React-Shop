import React from 'react';
import UserStyle from './User.module.css';

function User({user : {photoURL, displayName}}) {
    return (
        <div className={UserStyle.div}>
            <img className={UserStyle.img} src={photoURL} alt={displayName}/>
            <span className={UserStyle.span}>{displayName}</span>
        </div>
    );
}

export default User;