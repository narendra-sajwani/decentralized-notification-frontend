import React from 'react';
import { Button } from '../../components';
import { Channel } from '../../components';
import SearchChannel from '../../components/searchChannel';
import { useNavigate } from 'react-router-dom';
import './index.scss';
import { useState } from 'react';
const Home = () => {
    const [query, setQuery] = useState("");
    const [filteredData, setFilteredData] = useState([]);
    const [listOfChannels, setListOfChannels] = useState([
        { name: "channel1",
            description: "abc",
            address: "123",
        },
        { name: "channel2",
            description: "def",
            address: "456",
        },
        { name: "channel3",
            description: "lmn",
            address: "789",
        }
    ]);
    const navigate = useNavigate();
    const handleCreateChannel = () => {
        navigate("/create-channel");
    };
    const handleSendNotification = () => {
        navigate("/send-notification");
    };
    const handleSubscribe = () => {
    };
    const handleSearch = (query) => {
        let items = listOfChannels;
        items =
            query !== ""
                ? listOfChannels.filter((channel) => channel.name.substring(0, query.length).toLowerCase() ===
                    query.toLowerCase())
                : listOfChannels;
        setFilteredData(items);
        setQuery(query);
    };
    return (<div className='home-container'>
            <div className='home-top'>
                <Button text="Create Channel" handleClick={handleCreateChannel}/>
                <Button text="Send Notification" handleClick={handleSendNotification}/>
            </div>
            <div className='search'>
                <SearchChannel query={query} onSelectValue={handleSearch}/>
            </div>
            <h3 style={{ textAlign: "center" }}>List Of Channels</h3>
            <div className='channel-list'>
                {filteredData.length !== 0 ? filteredData.map((channel, index) => <Channel key={index} name={channel.name} description={channel.description} address={channel.address} id={index.toString()} handleClick={handleSubscribe}/>) :
            listOfChannels.map((channel, index) => <Channel key={index} name={channel.name} description={channel.description} address={channel.address} id={index.toString()} handleClick={handleSubscribe}/>)}
            </div>
        </div>);
};
export default Home;
