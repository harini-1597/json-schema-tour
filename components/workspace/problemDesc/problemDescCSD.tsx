import React from 'react';
import { VscRunAll } from 'react-icons/vsc';

const ProblemDescCSD = () => {
  return (
	<div className="h-full overflow-y-auto bg-white text-black p-8">
		<h1 className='text-4xl font-bold mb-7'>Creating A Schema Defintion</h1>
		<div className='text-lg mb-1'>Imagine you are an expensive car collector and you would like to store details about all of your cars in your laptop. 
        Since this is very important data you would like to use JSON and JSON Schema to validate your data.</div>
		<div className="h-auto mb-7"></div>
		<div className="h-auto mb-7"></div>
		<div className='text-lg mb-1'>Now, let us create the basic schema definition, by defining the following keywords, within {'{'} {'}'}:
		<div className="h-auto mb-3"></div>
		<ul className='list-disc ml-6'>
			<li>$schema: using this, specify which draft of the JSON Schema standard the schema adheres to.</li>
			<li>$id: using this, set a unique URI ( basically a reference id ) for your schema, which you can reference to from anywhere.</li>
		</ul>
		<div className="h-auto mb-3"></div>
		Click the <button className='buttons inline-flex items-center ml-auto text-lg bg-slate-100  px-1 py-1 border-solid border-2 border-gray-300 rounded transition-all focus:outline-none hover:bg-slate-300'>
				<VscRunAll />
            </button> button to compile and run the program, which will validate your schema definition and tell you if it is right or not. 
		</div>
		<div className="h-auto mb-20"></div>
    </div>
  );
}

export default ProblemDescCSD