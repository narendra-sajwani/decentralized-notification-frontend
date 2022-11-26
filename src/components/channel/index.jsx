import React from 'react';
import './index.scss';
const Channel = ({ name, description, address, id, handleClick }) => {
    const handleSubscribe = () => {
    };
    return (<div className='channel-wrapper'>
            <div className='channel-info'>
                <p>{name}</p>
                <p>About: {description}</p>
                <p>Address: {address}</p>
            </div>
            <button onClick={handleSubscribe}>Subscribe</button>
        </div>);
};
export default Channel;
