import React from 'react'
import { IoSettingsOutline } from "react-icons/io5";
import { BsCopy } from "react-icons/bs";

type Props = {}

function CodeTopbar({}: Props) {
    return (
		<div className='explorer flex items-center justify-between w-full'>
			<div className='flex items-center text-gray-700'>
				<div className='menu-button-name flex items-center focus:outline-none bg-white font-medium'>
					<div className='flex items-center px-1'>
						<div>schema.json</div>
					</div>
				</div>
			</div>

			<button className='buttons flex items-center justify-end ml-auto text-lg bg-slate-100  px-1 py-1 border-solid border-2 border-gray-300 rounded transition-all focus:outline-none hover:bg-slate-300'>
                <BsCopy />
            </button>
            <button className='buttons flex items-center justify-end mr-3 ml-1 text-lg bg-slate-100  px-1 py-1 border-solid border-2 border-gray-300 rounded transition-all focus:outline-none hover:bg-slate-300'>
                <IoSettingsOutline />
            </button>
		</div>
	);
}

export default CodeTopbar;