import React from 'react';
import './index.scss';
const Button = ({ handleClick, text }) => {
    return (<button className='button' onClick={handleClick}>
            {text}
        </button>);
};
export default Button;
