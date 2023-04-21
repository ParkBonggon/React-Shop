import React from 'react';
import ButtonStyle from './Button.module.css';

function Button({text, onClick}) {
    return (
        <button className={ButtonStyle.button} onClick={onClick}>
            {text}
        </button>
    );
}

export default Button;