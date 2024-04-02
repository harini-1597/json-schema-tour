import React from 'react'
import Link from 'next/link'
import { HiChevronDoubleRight, HiChevronDoubleLeft } from "react-icons/hi";

type Props = {}

const Nextbar = () => {
    return (
      <nav className='w-full bg-white fixed bottom-0 h-[40px] z-[170] shadow-xl drop-shadow-lg border-solid border-t-3 border-gray-600'>
        <div className="flex w-full items-center justify-between">
          <div className='flex items-center gap-8 flex-1 justify-center'>
            <div className='flex items-center justify-center bg-gray-200 hover:bg-blue-600 h-10 w-10 cursor-pointer rounded-lg'>
              <HiChevronDoubleLeft className="text-2xl" />
            </div>
            <Link href='/'>
              <h2 className='ml-5 mr-5 text-2xl font-medium font-sans cursor-pointer'>Problem List</h2>
            </Link>
            <div className='flex items-center justify-center bg-gray-200 hover:bg-blue-600 h-10 w-10 cursor-pointer rounded-lg'>
              <HiChevronDoubleRight className="text-2xl" />
            </div>
          </div>
        </div>
      </nav>
    );
  }
  
export default Nextbar;
  