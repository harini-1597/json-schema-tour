import { Page } from "../types/pages";
import Ajv2020 from "ajv/dist/2020";

const starterCodeCSD = `{create your schema definition: "here"};`;

const handlerJSON = async (fn: any) => {
    const ajv = new Ajv2020({ strict: true, allErrors: true });
    try {
        const schema = JSON.parse(fn.code);
        if (!schema.$schema) {
            fn.setValidity(
                "Unable to determine a dialect for the schema. The dialect can be declared in a number of ways, but the recommended way is to use the '$schema' keyword in your schema."
            );
            fn.setIsInvalid(true);
            return;
        } else if (
            schema.$schema !== "https://json-schema.org/draft/2020-12/schema"
        ) {
            fn.setValidity(
                "Not a valid JSON Schema for draft 2020-12.\nPlease set $schema to https://json-schema.org/draft/2020-12/schema"
            );
            fn.setIsInvalid(true);
            return;
        }

        const valid = await ajv.validateSchema(schema);
        if (valid) {
            fn.setValidity("Correct! Let's move on to the next step.");
            fn.setIsInvalid(false);
        } else {
            fn.setValidity(ajv.errorsText());
            fn.setIsInvalid(true);
        }
    } catch (e) {
        fn.setValidity(JSON.stringify((e as Error).message));
        fn.setIsInvalid(true);
    }
};

// Example usage:
const myFunction = {
    code: `{\n    \n}`,
    setValidity: (message: string) => console.log("Validity:", message),
    setIsInvalid: (isInvalid: boolean) => console.log("Is Invalid:", isInvalid),
};

handlerJSON(myFunction);


export const CSD: Page = {
	id: "create-schema-definiton",
	title: "1. Create Schema Definition",
	problemStatement: `<div className="h-full overflow-y-auto bg-white text-black p-8">
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
	</div>`,
	examples: [
		{
			id: 1,
			inputText: "Set a schema definiton and a sample of your choice:",
			outputText:
			`{
				"$schema": "https://json-schema.org/draft/2020-12/schema",
				"$id": "https://example.com/car.schema.json",
				"title": "Cars",
				"description": "Car collection",
				"type": "object"
			}`,
			explanation: "As we can see this is a basic schema definition.",
		}
	],
	order: 1,
	starterCode: starterCodeCSD,
	handlerFunction: handlerJSON,
	starterFunctionName: `{"$schema": "https://json-schema.org/draft/2020-12/schema"}`,
};