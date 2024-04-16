import React from 'react';
import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi';
import { pages } from '../../Page/pages';
import Link from 'next/link';
type Props = {}

const ProblemDesc = () => {
  return (
	<div className="h-full overflow-y-auto bg-white text-black p-8">
		<h1 className='text-4xl font-bold mb-7'>Creating Your First Schema</h1>
		<div className='text-lg mb-1'>JSON Schema is a vocabulary that you can use to annotate and validate JSON documents. 
		This tutorial guides you through the process of creating a JSON Schema document, including:</div>
		<div className="h-auto mb-7"></div>
		{pages.map((text, id) => {
			return (
				<div key={text.id} className="text-lg">
      				<ul className="list-disc ml-6">
        				<li><Link href={`/tour/${text.id}`} className="text-blue-500 mb-2 cursor">{text.title}</Link></li>
      				</ul>
    			</div>
			);
		})}
		<div className="h-auto mb-7"></div>
		<div className='text-lg mb-1'>This is an interactive tour. You can navigate through it using the
		<div className="h-auto mb-3"></div>
		<ul>
			<li><HiChevronDoubleRight className="text-2xl inline-flex text-logo-blue" /> to go to the next page or</li>
			<li><HiChevronDoubleLeft className="text-2xl inline-flex text-logo-blue" /> to go to the previous page</li>
		</ul>
		<div className="h-auto mb-3"></div>
		Click the <button className="btn btn-light-grey"> <span className="text-dark-grey">Run</span></button> button to compile and run the program, which will validate your schema definition and tell you if it is right or not. 
		The result will be displayed below the code.
		These example programs demonstrate different aspects of JSON Schema. The programs in the tour are meant to be starting points for your own experimentation.</div>
		<div className="h-auto mb-20"></div>
		{/* <h1 className="text-2xl font-bold mb-4">Welcome to <a href="https://xxx.com" className="text-blue-500 underline">xxx.com</a></h1>
      <div className="bg-gray-200 p-4 rounded-md shadow-md mb-4">
        <h2 className="text-lg font-semibold mb-2">The Problem:</h2>
        <p className="text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.</p>
        </div> */}
    </div>
  );
}

export default ProblemDesc