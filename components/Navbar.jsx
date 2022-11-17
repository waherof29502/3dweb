import React, { useState } from 'react';
import { close, menu, sandpock } from '../assets';
import Image from 'next/image';
import { navLinks } from '../constants';
import Link from 'next/link';
import Modal from 'react-modal';
import MemberModal from './MemberModal';
import Selector from './Selector';

Modal.setAppElement('#__next');

const customModalStyles = {
  content: {
    top: '60%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    background: 'transparent',
    padding: 0,
    border: 'none',
  },
  overlay: {
    backgroundColor: '#4040403a',
  },
};
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className='w-full flex py-10 justify-between items-center z-10'>
      {/* Logo */}
      <Image
        src={sandpock}
        alt='samoi'
        className='w-[124px] h-[32px] object-contain'
      />
      {/* Desktop Nav Items */}
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
      {/* Selected Button */}
      <Selector />
      {/* Popup Button */}
      <button
        className='bg-primary text-white py-2 px-4 rounded-full sm:flex hidden'
        onClick={() => setIsOpen(true)}
      >
        LOGIN
      </button>

      <Modal
        isOpen={isOpen}
        style={customModalStyles}
        onRequestClose={() => setIsOpen(false)}
      >
        <MemberModal />
      </Modal>
      {/* Mobile Nav Items */}
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
          } p-6 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl`}
        >
          <ul className='list-none flex flex-col justify-end items-center flex-1'>
            {navLinks.map((navLink, index) => (
              <li
                key={navLink.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${
                  index === navLinks.length - 1 ? 'mr-0' : 'mb-4'
                } text-white`}
              >
                <a href={`#${navLink.id}`}>{navLink.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
