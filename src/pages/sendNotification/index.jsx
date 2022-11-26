import React, { useState } from 'react';
import './index.scss';
import { Button } from '../../components';
const SendNotification = () => {
    const [sendType, setSendType] = useState('');
    const handleChangeType = (e) => {
        setSendType(e.target.value);
    };
    const handleSendNotification = () => {
    };
    return (<div className="send-notification-container">
            <div className='wrapper'>
                <select className='send-type' value={sendType} onChange={handleChangeType}>
                    <option value="">Select Type</option>
                    <option value="broadcast">Broadcast</option>
                    <option value="specific">Send To Specific Subscriber</option>
                </select>
                {sendType === ''
            ? null
            : sendType === 'broadcast' ?
                <div className='broadcast'>
                        <form>
                            <div>
                                <input type="text" placeholder='Notification Message'/>
                            </div>
                            <div>
                                <Button text="Send Notification" handleClick={handleSendNotification}/>
                            </div>
                        </form>
                    </div> :
                <div className='specific'>
                        <form>
                            <div>
                                <input type="text" placeholder="Receiver's Address"/>
                            </div>
                            <div>
                                <input type="text" placeholder='Notification Message'/>
                            </div>
                            <div>
                                <Button text="Send Notification" handleClick={handleSendNotification}/>
                            </div>
                        </form>
                    </div>}
            </div>
        </div>);
};
export default SendNotification;
