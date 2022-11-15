import React from 'react';
import Tilt from 'react-parallax-tilt';
const styles = {
  wrapper: `w-[30rem] h-[35rem] flex flex-col justify-start items-center gap-[1rem] p-[1rem] font-white font-mediumSerif overflow-hidden z-50 `,
  infoContainer: `container h-96 w-96 bg-white bg-opacity-10 rounded-2xl shadow-5xl relative z-2 border border-opacity-30 border-r-0 border-b-0 backdrop-filter backdrop-blur-sm`,
  title: `my-[2rem] font-bold text-3xl`,
  smallField: `w-full flex flex-1 gap-[1rem]`,
  largeField: `w-full flex flex-col justify-between gap-[4rem]`,
  fieldTitle: `flex-1 text-end`,
  inputContainer: ``,
  inputField: ` border border-r-0 border-t-0 border-l-0 p-1.4 focus:outline-none bg-transparent text-white`,
  accentedButton: `bg-black text-white py-2 px-4 rounded-full`,
};

const MemberModal = () => {
  return (
    <div className={styles.wrapper}>
      <Tilt>
        <div className={styles.infoContainer}>
          <form className='h-full flex flex-col justify-evenly items-center'>
            <div className='text-white font-poppins text-2xl tracking-widest'>
              <h1>SIGNUP</h1>
            </div>
            <input
              type='text'
              placeholder='Email'
              className={styles.inputField}
            />
            <input
              type='text'
              placeholder='First Name'
              className={styles.inputField}
            />
            <input
              type='password'
              placeholder='password'
              className={styles.inputField}
            />
            <input
              type='Submit'
              placeholder='send'
              className='cursor-pointer font-poppins rounded-full px-5 py-1 bg-white bg-opacity-50 hover:bg-white hover:bg-opacity-80 '
            />
          </form>
        </div>
      </Tilt>
    </div>
  );
};

export default MemberModal;
