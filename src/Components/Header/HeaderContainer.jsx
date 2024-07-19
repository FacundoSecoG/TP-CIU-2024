import React from 'react';
import HeaderContent from './HeaderContent';

const HeaderContainer = () => {
    return (
        <div className='md:px-md px-x w-full h-20 rounded-2xl fixed -top-3  pt-4 z-[80] drop-shadow-md border-b-4 border-teal-800/85 shadow-lg duration-500 transition  backdrop-blur-[2rem]'>
            <div className='flex justify-between absolute w-[100vw]'>
                <HeaderContent />
            </div>
        </div>
)}

export default HeaderContainer