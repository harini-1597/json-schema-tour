import React from "react";
import { VscRunAll } from "react-icons/vsc";
import { IoEnterOutline } from "react-icons/io5";

type EditorFooterProps = {};

const EditorFooter: React.FC<EditorFooterProps> = () => {
	return (
		<div className="w-full flex-col">
		<div className='explorer flex items-center justify-between w-full'>
			<div className='flex items-center text-gray-700'>
				<div className='menu-button-name flex items-center focus:outline-none bg-white font-medium'>
					<div className='flex items-center px-1'>
						<div>Example</div>
					</div>
				</div>
			</div>
			<div className='flex items-center text-gray-700'>
				<div className='menu-button-name flex items-center focus:outline-none bg-white font-medium'>
					<div className='flex items-center px-1'>
						<div>Testcase</div>
					</div>
				</div>
			</div>
			<button className='buttons flex items-center justify-end ml-auto text-lg bg-slate-100  px-1 py-1 border-solid border-2 border-gray-300 rounded transition-all focus:outline-none hover:bg-slate-300'>
				<VscRunAll />
            </button>
            <button className='buttons flex items-center justify-end mr-3 ml-1 text-lg bg-slate-100  px-1 py-1 border-solid border-2 border-gray-300 rounded transition-all focus:outline-none hover:bg-slate-300'>
				<IoEnterOutline />
            </button>
		</div>
		<div className="font-medium">
			<p className="text-base font-medium mt-4 ml-2 text-black">Sample:</p>
			<div className="relative flex justify-normal cursor-text rounded-lg border ml-2 mr-2 px-3 py-[10px] bg-slate-300 border-transparent text-gray-800 mt-2 overflow-auto">
			testcases and examples go here 
			</div>
		</div>
		</div>
	);
};
export default EditorFooter;
