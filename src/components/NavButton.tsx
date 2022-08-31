import React from 'react';

interface NavButtonProps {
  title: string;
  isActive?: boolean;
}
const NavButton = ({ title, isActive }: NavButtonProps) => {
  return (
    <button
      className={`${
        isActive && 'bg-[#036756]'
      } hover:bg-[#036756] text-white py-2 px-4 rounded font-bold`}
    >
      {title}
    </button>
  );
};

export default NavButton;
