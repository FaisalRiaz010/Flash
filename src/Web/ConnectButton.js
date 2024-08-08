// export default function ConnectButton() {
//     return <w3m-button />
// }
import React, { useState, useEffect } from 'react';
import { useWeb3Modal } from '@web3modal/wagmi/react';
import { useAccount } from 'wagmi'; // Assuming you're using wagmi for account management

const ConnectButton = () => {
    const { open, close } = useWeb3Modal();
    const { isConnected, address } = useAccount();
    const [connectedAddress, setConnectedAddress] = useState('');

    // Update the connected address when the account changes
    useEffect(() => {
        if (isConnected && address) {
            setConnectedAddress(address);
        } else {
            setConnectedAddress('');
        }
    }, [isConnected, address]);

    return (
        <button
            onClick={() => open()}
            className='bg-secondary flex items-center px-4 py-3 gap-2 text-black rounded-2xl'
        >
            <img className='w-[30px]' src='../../assets/Vector.png' alt='Connect Wallet' />
            {connectedAddress ? (
                <span>{`${connectedAddress.slice(0, 6)}...${connectedAddress.slice(-4)}`}</span>
            ) : (
                'Connect Wallet'
            )}
        </button>
    );
};

export default ConnectButton;




// import React, { useState } from 'react';
// import { toast } from 'react-toastify';
// import { useWallet } from '../context/WalletContext';

// export const ConnectWalletButton = () => {
//     const { setResponseStatus, account } = useWallet();
//     const [connecting, setConnecting] = useState(false);

//     const connectWallet = async () => {
//         try {
//             setConnecting(true);
//             await window.ethereum.request({ method: 'eth_requestAccounts' });
//             // You might need to refresh the page or update state to reflect the connection
//             window.location.reload();
//         } catch (error) {
//             console.error('Error connecting wallet:', error);
//             toast.error('Failed to connect wallet.', { autoClose: 1000 });
//         } finally {
//             setConnecting(false);
//         }
//     };

//     return (
//         <button 
//             onClick={connectWallet} 
//             className='bg-secondary flex items-center px-4 py-3 gap-2 text-black rounded-2xl'
//             disabled={connecting}
//         >
//             {account ? `Connected: ${account}` : 'Connect Wallet'}
//         </button>
//     );
// };


// // import { ConnectButton } from '@rainbow-me/rainbowkit';
// // export const ConnecWallet = () => {
// //     var theme = 'dark'
// //     return (
// //         <ConnectButton.Custom>
// //             {({
// //                 account,
// //                 chain,
// //                 openAccountModal,
// //                 openChainModal,
// //                 openConnectModal,
// //                 authenticationStatus,
// //                 mounted,
// //             }) => {
                
// //                 const ready = mounted && authenticationStatus !== 'loading';
// //                 const connected =
// //                     ready &&
// //                     account &&
// //                     chain &&
// //                     (!authenticationStatus ||
// //                         authenticationStatus === 'authenticated');
// //                 return (
// //                     <div
// //                         {...(!ready && {
// //                             'aria-hidden': true,
// //                             'style': {
// //                                 opacity: 0,
// //                                 pointerEvents: 'none',
// //                                 userSelect: 'none',
// //                             },
// //                         })}
// //                     >
// //                         {(() => {
// //                             if (!connected) {
// //                                 return (
// //                                     <button onClick={openConnectModal} className='bg-secondary flex items-center px-4 py-3 gap-2 text-black rounded-2xl'>
// //                                         <img className='w-[30px]' src='../../assets/Vector.png' alt='' />
// //                                         Connect Wallet
// //                                     </button>
// //                                 );
// //                             }
// //                             if (chain.unsupported) {
// //                                 return (
// //                                     <button onClick={openChainModal} type="button" className=' bg-mint_medium_grey rounded-md py-2 px-4 text-mint_text_grey hover:bg-mint_dark_grey hover:scale-105 transition-all  text-lg font-mono'>
// //                                         Wrong network
// //                                     </button>
// //                                 );
// //                             }
// //                             return (
// //                                 <div style={{ display: 'flex', gap: 12 }} className='bg-secondary flex items-center px-3 text-black rounded-2xl'>
// //                                     <button
// //                                         onClick={openChainModal}
// //                                         style={{ display: 'flex', alignItems: 'center' }}
// //                                         type="button"
// //                                     >
// //                                         {chain.hasIcon && (
// //                                             <div
// //                                                 style={{
// //                                                     background: chain.iconBackground,
// //                                                     width: 12,
// //                                                     height: 12,
// //                                                     borderRadius: 999,
// //                                                     overflow: 'hidden',
// //                                                     marginRight: 4,
// //                                                 }}
// //                                             >
// //                                                 {chain.iconUrl && (
// //                                                     <img
// //                                                         alt={chain.name ?? 'Chain icon'}
// //                                                         src={chain.iconUrl}
// //                                                         style={{ width: 12, height: 12 }}
// //                                                     />
// //                                                 )}
// //                                             </div>
// //                                         )}

// //                                     </button>
// //                                     <button onClick={openAccountModal} type="button" className='bg-secondary flex items-center px-4 py-3 gap-2 text-black rounded-2xl'>
// //                                         {account.displayName}
// //                                         <span className='hidden sm:block'> {account.displayBalance
// //                                             ? ` (${account.displayBalance})`
// //                                             : ''}
// //                                         </span>
// //                                     </button>
// //                                 </div>
// //                             );
// //                         })()}
// //                     </div>
// //                 );
// //             }}
// //         </ConnectButton.Custom>
// //     );
// // };