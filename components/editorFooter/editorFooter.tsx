import React from "react";
import { BsChevronUp } from "react-icons/bs";

type EditorFooterProps = {};

const EditorFooter: React.FC<EditorFooterProps> = () => {
	return (
		<div className='flex bg-white absolute bottom-10 z-10 w-1/2'>
			<div className='mx-2 my-[10px] flex justify-between w-full'>
				<div className='mr-2 flex flex-1 flex-nowrap items-center space-x-4'>
					<button className='px-3 py-1.5 font-medium items-center transition-all inline-flex bg-dark-fill-3 text-sm hover:bg-dark-fill-2 text-dark-label-2 rounded-lg pl-3 pr-2'>
						Console
						<div className='ml-1 transform transition flex items-center'>
							<BsChevronUp className='fill-gray-6 mx-1 fill-dark-gray-6' />
						</div>
					</button>
				</div>
				<div className='ml-2 flex items-center space-x-4'>
					<button
						className='px-3 py-1.5 text-l font-medium items-center whitespace-nowrap 
                        transition-all focus:outline-none inline-flex bg-zinc-400  hover:bg-zinc-600 text-black rounded-lg'>
						Run
					</button>
					<button
						className='px-3 py-1.5 text-l font-medium items-center whitespace-nowrap 
                        transition-all focus:outline-none inline-flex bg-zinc-400  hover:bg-zinc-600 text-black rounded-lg'>
						Submit
					</button>
				</div>
			</div>
		</div>
	);
};
export default EditorFooter;
