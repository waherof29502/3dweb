import React from 'react';

const styles = {
  wrapper: `w-[20rem] h-[10rem] flex flex-col font-white justify-start items-center gap-[1rem] p-[1rem] font-mediumSerif overflow-scroll z-50`,
  title: `my-[2rem] font-bold text-3xl`,
  smallField: `w-full flex justify-between gap-[1rem]`,
  largeField: ``,
  fieldTitle: `flex-1 text-end`,
  inputContainer: `flex-[5] h-min border-2 border-[#787878]`,
  inputField: `w-full border-0 outline-none bg-transparent`,
  accentedButton: `bg-black text-white py-2 px-4 rounded-full`,
};

const MemberModal = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Info</div>

      <div className={styles.smallField}>
        <span className={styles.fieldTitle}>Test</span>
        <span className={styles.inputContainer}>
          <input
            className={styles.inputField}
            type='text'
            onChange={(event) => setTitle(event.target.value)}
          />
        </span>
      </div>
    </div>
  );
};

export default MemberModal;
