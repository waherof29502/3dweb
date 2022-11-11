import React, { useState } from 'react';
import { logo, close, menu, airbnb } from '../assets';
import Image from 'next/image';
import { navLinks } from '../constants';
import Link from 'next/link';
import Modal from 'react-modal';
import MemberModal from './MemberModal';

Modal.setAppElement('#__next');
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#a44545',
    padding: 0,
    border: 'none',
  },
  overlay: {
    backgroundColor: '#8f174b7e',
  },
};
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className='w-full flex py-10 justify-between items-center navbar z-10'>
      {/* Logo */}
      <Image
        src={airbnb}
        alt='samoi'
        className='w-[124px] h-[32px] object-contain'
      />
      {/* Nav Items */}
      <ul className='list-none sm:flex hidden justify-start px-8 items-center flex-1'>
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              index === navLinks.length - 1 ? 'mr-0' : 'mr-10'
            } text-white hover:text-secondary`}
          >
            ◆ <a href={`#${nav.id}`}>{nav.title}</a> ◆
          </li>
        ))}
      </ul>
      <button className='bg-secondary text-white py-2 px-4 rounded-full mr-6 sm:flex hidden'>
        English
      </button>
      {/* <div className='lg:relative bg-white right-0 rounded-md p-2 px-10'>
        <li>
          <button>English</button>
        </li>
      </div> */}

      {/* Popup Button */}
      <button
        className='bg-secondary text-white py-2 px-4 rounded-full sm:flex hidden'
        onClick={() => setIsOpen(true)}
      >
        PopupModal
      </button>

      <Modal
        isOpen={isOpen}
        style={customStyles}
        onRequestClose={() => setIsOpen(false)}
      >
        <MemberModal />
      </Modal>

      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <Image
          src={toggle ? close : menu}
          alt='menu'
          className='w-[28px] h-[28px] object-contain'
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${
            toggle ? 'flex' : 'hidden'
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl`}
        >
          <ul className='list-none flex flex-col justify-end items-center flex-1'>
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${
                  index === navLinks.length - 1 ? 'mr-0' : 'mb-4'
                } text-white`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
