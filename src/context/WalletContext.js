import React, { createContext, useState, useContext, useEffect } from 'react';
import { useAccount } from 'wagmi';

// Create a Context for the wallet response state
const WalletContext = createContext();

// Create a Provider component
export const WalletProvider = ({ children }) => {
    // const [responseStatus, setResponseStatus] = useState(false);
    const [status, setStatus] = useState(false)
    const [account, setAccount] = useState();
    const { isConnected, address } = useAccount();
    const [connectedAddress, setConnectedAddress] = useState('');

    useEffect(() => {
        if (isConnected && address) {
            setConnectedAddress(address);
        } else {
            setConnectedAddress('');
        }
    }, [isConnected, address]);

    return (
        <WalletContext.Provider value={{ status, setStatus, connectedAddress }}>
            {children}
        </WalletContext.Provider>
    );
};

export const useWallet = () => useContext(WalletContext);



// import React, { createContext, useState, useContext, useEffect } from 'react';

// // Create a Context for the wallet response state
// const WalletContext = createContext();

// // Create a Provider component
// export const WalletProvider = ({ children }) => {
//     const [responseStatus, setResponseStatus] = useState(false);

//     return (
//         <WalletContext.Provider value={{ responseStatus, setResponseStatus }}>
//             {children}
//         </WalletContext.Provider>
//     );
// };

// // Custom hook to use the WalletContext
// export const useWallet = () => useContext(WalletContext);