import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { useWallet } from '';
import './LoginSubmission.css';
import { toast, ToastContainer } from 'react-toastify';
import { useAccount,useConnect } from 'wagmi';
import { useWallet } from '../../context/WalletContext';

const LoginSubmission = () => {
    const { status } = useWallet();
    // const status = true
    // const responseStatus = true
    const [solAddress, setSolAddress] = useState('');
    const [walletAddress, setWalletAddress] = useState('');
    const { address, isConnected } = useAccount()

    // useEffect(() => {
    //     getWalletAddress();
    // }, []);

    const handleSubmit = async () => {
        // const address = await getWalletAddress();
        if (!address || !solAddress) {
            toast.error('Please connect your wallet and enter a Solana address', { autoClose: 500 });
            return;
        }

        try {
            const response = await axios.post(`${process.env.REACT_APP_API}add-address`, {
                holder_address: String(address).toLowerCase(),
                sol_address: solAddress
            });
            setSolAddress('');
            toast.success('Submitted Successfully', { autoClose: 500 });
            console.log('Response:', response.data);
        } catch (error) {
            toast.error('Address not whitelisted', { autoClose: 300 });
            console.error('Error submitting address:', error);
        }
    };

    return (
        <div className='flex justify-center items-center flex-col my-[70px] p-2'>
            <ToastContainer />
            <div>
                <div className='flex justify-center items-center gap-2'>
                    <img className='w-[47px] h-[40px] max-[700px]:w-[37px] max-[700px]:h-[30px]' src="../../assets/logo.png" alt="" />
                    <h5 className='text-3xl font-bold max-[700px]:text-xl'>Flash = $0.006200</h5>
                </div>
                <h2 className='text-center text-5xl font-bold my-9 text-[#fcbf07] max-[700px]:text-2xl max-[700px]:my-5'>Migration ETH To Solana</h2>
                <p className='text-center text-2xl max-w-[700px] opacity-60 max-[700px]:text-lg'>Connect Your Wallet Which Contains Flash 3.0 Then Enter Your Solana Wallet To Receive Your Airdrop</p>
            </div>
            <div className='bg-[#fcbf07] h-[2px] w-full max-w-[1400px] my-[50px] opacity-60'></div>

            <div className='w-full flex justify-center items-center flex-col gap-10'>
                <div className='flex items-center gap-8'>
                    <img className='w-[60px] h-[60px]' src="../../assets/eth.png" alt="" />
                    <img className='w-[35px] h-[35px]' src="../../assets/arrow.png" alt="" />
                    <img className='w-[60px] h-[60px]' src="../../assets/c.png" alt="" />
                </div>

                <div className='w-full max-w-[1000px] flex justify-center items-center flex-col'>
                    <h6 className='text-center mb-5 text-xl max-w-[700px] opacity-60'>Submit Your Solana Address</h6>
                    <div className="w-full max-w-[1000px] flex items-center justify-center border-gray-300 rounded-[50px] bg-[#1b1b1b] b-primary">
                        <img className='w-[40px] h-[40px]' src="../../assets/c.png" alt="Icon" />
                        <input
                            type="text"
                            placeholder="Enter Your Solana Address"
                            value={solAddress}
                            onChange={(e) => setSolAddress(e.target.value)}
                            disabled={!status}
                            className="flex-1 max-w-[335px] opacity-60 outline-none rounded-xl p-5 bg-transparent placeholder:text-[#86888C] text-2xl font-semibold max-[600px]:text-lg"
                        />
                    </div>
                    <button
                        disabled={!status}
                        onClick={handleSubmit}
                        className='themeBtn-lg mt-[15px] text-2xl font-semibold'
                    >
                        Submit
                    </button>
                </div>

                <div>
                    {address && <p className={`font-bold ${status ? 'text-[#35DD00]' : 'text-[#FD2020]'}`}>{status ? 'You Are Eligible' : ''}</p>}
                </div>
            </div>
        </div>
    );
}

export default LoginSubmission;