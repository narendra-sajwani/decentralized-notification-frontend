import React, { useEffect } from 'react';
import './index.scss';
import { Button } from '../components';
import logo from "../assets/push-notification.png";
import { useAccount, useConnect } from 'wagmi';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';

const Layout = (props) => {

    const { connectAsync } = useConnect();
    const { isConnected } = useAccount();
   
    const handleConnectWallet = async () => {
        const { account, chain } = await connectAsync({ connector: new MetaMaskConnector() });

        const userData = { address: account, chain: chain.id, network: 'evm' };

        console.log(userData)
        
    }    
    
    return (<div className="main-container">
            <header className="navbar">
                <div className="navbar-left">
                    <a href="/" style={{ textDecoration: "none", display: "flex" }}>
                        <img className="logo" src={logo} alt="Logo"/>
                        <p>Web3 Notifications</p>
                    </a>
                </div>
                <div className='navbar-right'>
                    {isConnected ? <p>Wallect Connected</p> : <Button text="Connect Wallet" handleClick={handleConnectWallet}/>}
                </div>
            </header>
            {props.children}
        </div>);
};
export default Layout;
