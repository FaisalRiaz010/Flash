import React, { useEffect } from 'react';
import './Navbar.css';
import ConnectButton from '../../Web/ConnectButton';
import { useWallet } from '../../context/WalletContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const Navbar = () => {
    const { status, setStatus, connectedAddress } = useWallet();
    console.log("account",connectedAddress)
    useEffect(() => {
        if (!connectedAddress) return;
        postWalletAddress(connectedAddress);
    }, [connectedAddress]);

    const postWalletAddress = async (address) => {
        console.log("address", address);
        try {
            const response = await axios.post(`${process.env.REACT_APP_API}holder-addresses`, {
                holder_address: String(address).toLowerCase()
            });
            console.log("response new", response);
            setStatus(response.data.status);
            console.log('Response:', response.data);
        } catch (error) {
            console.error('Error posting wallet address:', error);
            toast.error('Failed to send wallet address.', { autoClose: 1000 });
        }
    };

    return (
        <div>
            <div className='navbar-window'>
                <div className='logo-window'>
                    <img src="../../assets/logo.png" alt="Logo" />
                    <strong className='max-[700px]:hidden'>Flash Technologies</strong>
                </div>
                <ConnectButton />
            </div>
        </div>
    );
};

export default Navbar;



// import React, { useEffect } from 'react'
// import './Navbar.css'
// import { ConnecWallet } from '../../Web/ConnectButton';
// import { useWallet } from '../../context/WalletContext';
// import { useAccount } from 'wagmi';
// import { toast } from 'react-toastify';
// import axios from 'axios';

// const Navbar = () => {
//     const { responseStatus, setResponseStatus } = useWallet()
//     const { address, isConnected } = useAccount()

//     useEffect(() => {

//         if (!address) return
//         postWalletAddress(address)

//     }, [address, isConnected])

//     const postWalletAddress = async (address) => {
//         console.log("address",  address)
//         try {
//             const response = await axios.post('http://192.168.18.39:3000/api/holder-addresses', {
//                 holder_address: String(address).toLowerCase()
//             });
//             console.log("resp-api", response)
//             setResponseStatus(response.data.status);
//             console.log('Response:', response.data);
//         } catch (error) {
//             console.error('Error posting wallet address:', error);
//             toast.error('Failed to send wallet address.', { autoClose: 1000 });
//         }
//     };
//     return (
//         <div>
//             <div className='navbar-window'>
//                 <div className='logo-window'>
//                     <img src="../../assets/logo.png" alt="" />
//                     <strong className='max-[700px]:hidden'>Flash Technologies</strong>
//                 </div>
//                 {/* <ConnectWallet /> */}
//                 <ConnecWallet />
//             </div>
//         </div>
//     )
// }

// export default Navbar