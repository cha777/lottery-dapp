import React from 'react';
import Image from 'next/image';
import NavButton from './NavButton';
import { Bars3BottomRightIcon } from '@heroicons/react/24/solid';

const Header = () => {
  return (
    <header className='grid grid-cols-2 md:grid-cols-5 justify-between items-center p-5'>
      <div className='flex items-center space-x-2'>
        <Image
          src='https://i.imgur.com/4h7mAu7.png'
          className='rounded-full h-20 w-20'
          alt='logo'
          width={80}
          height={80}
        />
        <div>
          <h1 className='text-lg text-white font-bold'>PAPAFAM Lottery</h1>
          <p className='text-xs text-emerald-500 truncate'>User...</p>
        </div>
      </div>
      <div className='hidden md:flex md:col-span-3 items-center justify-center rounded-md'>
        <div className='bg-[#0AF1C] p-4 space-x-2'>
          <NavButton isActive title='Buy Tickets' />
          <NavButton title='Logout' />
        </div>
      </div>
      <div className='flex flex-col ml-auto text-right'>
        <Bars3BottomRightIcon className='h-8 w-8 mx-auto text-white cursor-pointer' />
        <span className='md:hidden'>
          <NavButton title='Logout' />
        </span>
      </div>
    </header>
  );
};

export default Header;
