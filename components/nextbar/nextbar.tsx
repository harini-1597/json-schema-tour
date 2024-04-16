import React from 'react'
import Link from 'next/link'
import { HiChevronDoubleRight, HiChevronDoubleLeft } from "react-icons/hi";


const Nextbar = () => {
    return (
      <nav className='sticky w-full bottom-0 left-0 bg-white h-[40px] z-[1000] border-t border-gray-300'>
        <div className="flex h-full max-w-64 mx-auto justify-items-center">
        <div className="flex items-center justify-between w-full text-black">
          <button type="button" className="inline-flex items-center justify-center text-red">
            <HiChevronDoubleLeft className="w-7 h-7 text-logo-blue hover:text-blue-400" />
          </button>
          <span className="flex-shrink-0 mx-auto text-base font-medium">1 of 5</span>
          <button type="button" className="inline-flex items-center justify-center">
            <HiChevronDoubleRight className="w-7 h-7 text-logo-blue hover:text-blue-400" />
          </button>
        </div>
        </div>
      </nav>
    );
  }
  
export default Nextbar;
  