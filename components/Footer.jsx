import React, { useState } from 'react';
import { sound, mute } from '../assets';
import Image from 'next/image';
import { BsFacebook } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';
import { FaDiscord, FaTwitter } from 'react-icons/fa';
const Footer = () => {
  const [click, setClick] = useState(false);
  return (
    <nav className='flex flex-1 pb-10 justify-between items-end'>
      {/* Left Icon */}
      <Image
        src={click ? sound : mute}
        alt='sound'
        className='w-[124px] h-[32px] object-contain'
        onClick={() => setClick((prev) => !prev)}
      />
      {/* Right Icon */}
      <div className='flex flex-col '>
        <BsFacebook className='text-primary my-2 hover:text-btnHover' />
        <AiFillInstagram className='text-primary my-2 hover:text-btnHover' />
        <FaDiscord className='text-primary my-2 hover:text-btnHover' />
        <FaTwitter className='text-primary my-2 hover:text-btnHover' />
      </div>
    </nav>
  );
};

export default Footer;
