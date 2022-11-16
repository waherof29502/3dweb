import React, { useState, useEffect } from 'react';
import { BiChevronDown } from 'react-icons/bi';
import { languages } from '../constants/index';

const Selector = () => {
  const [currentLanguage, setCurrentLanguage] = useState('ENG');

  return (
    <button className='py-2 px-4 mr-8 justify-center items-center bg-primary focus:outline-none text-white rounded-full focus:ring ring-white group sm:flex hidden'>
      {currentLanguage}
      <BiChevronDown size={20} className='ml-4' />
      <ul className='absolute hidden group-focus:block top-full -mt-6 w-max border rounded-lg '>
        {languages.map((language, i) => (
          <li
            key={language.id}
            className='p-2 px-9 text-sm  hover:text-secondary rounded-lg'
            onClick={() => setCurrentLanguage(language.title)}
          >
            {language.title}
          </li>
        ))}
      </ul>
    </button>
  );
};

export default Selector;
