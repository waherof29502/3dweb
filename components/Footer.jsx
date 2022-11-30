import React, { useState } from 'react';
import { sound, mute } from '../assets';
import Image from 'next/image';
import { BsFacebook } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';
import { FaDiscord, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const [click, setClick] = useState(false);
  return (
    <nav className='flex flex-1 pb-10 justify-between items-end '>
      {/* Left Icon */}
      <Image
        src={click ? sound : mute}
        alt='sound'
        className='w-[124px] h-[32px] object-contain sm:ml-0 xs:ml-6 '
        onClick={() => setClick((prev) => !prev)}
        assets
      />
      {/* Right Icon */}
      <div className='flex flex-col sm:mr-0 xs:mr-6'>
        <BsFacebook
          size='24'
          className='text-primary my-2 hover:text-btnHover '
          onClick={() => window.open('https://www.facebook.com/')}
        />
        <AiFillInstagram
          size='24'
          className='text-primary my-2 hover:text-btnHover'
          onClick={() => window.open('https://www.instagram.com/')}
        />
        <FaDiscord
          size='24'
          className='text-primary my-2 hover:text-btnHover'
          onClick={() => window.open('https://discord.com/')}
        />
        <FaTwitter
          size='24'
          className='text-primary my-2 hover:text-btnHover'
          onClick={() => window.open('https://twitter.com/home')}
        />
      </div>
    </nav>
  );
};

export default Footer;
