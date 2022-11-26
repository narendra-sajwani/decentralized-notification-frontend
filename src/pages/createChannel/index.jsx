import React from 'react';
import './index.scss';
import { Button } from '../../components';
const CreateChannel = () => {
    const handleCreateChannel = () => {
    };
    return (<div className='create-channel-container'>
            <form onSubmit={handleCreateChannel} className="create-channel-form">
                <div>
                    <input type="text" placeholder='Channel Name'/>
                </div>
                <div>
                    <input type="text" placeholder='Channel Description'/>
                </div>
                <div>
                    <Button text="Create Channel" handleClick={handleCreateChannel}/>
                </div>
            </form>
        </div>);
};
export default CreateChannel;
