import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='flex flex-col items-center gap-3 py-[70px] bg-[#1b1b1b] p-2'>
            <img src="../../assets/logo.png" alt="" />
            <h5 className='text-3xl font-bold'>Flash Technologies</h5>
            <div className='bg-[#fcbf07] h-[2px] w-full max-w-[400px] opacity-60'></div>
            <p className='text-[#86888C] text-xl text-center'>Join our community for the lastest updates and exclusive offers.</p>
            <div className='flex items-center flex-wrap gap-5 my-5'>
                <Link to=''><img className='' src="../../assets/x.png" alt="" /></Link>
                <Link to=''><img className='' src="../../assets/telegram.png" alt="" /></Link>
                <Link to=''><img className='' src="../../assets/discord.png" alt="" /></Link>
                <Link to=''><img className='' src="../../assets/youtube.png" alt="" /></Link>
            </div>
        </div>)
}
export default Footer