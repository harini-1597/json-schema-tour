export type Page = {
	id: string;
	title: string;
	order: number;
	doc: string;
};

export const pages: Page[] = [
	{
		id: "create-schema-definition",
	    title: "Creating a schema definition",
	    order: 1,
	    doc: "/",
	},
    {
		id: "define-properties",
	    title: "Defining properties",
	    order: 2,
	    doc: "/",
	},
    {
		id: "nesting-data-structures",
	    title: "Create a nested data structure",
	    order: 3,
	    doc: "/",
	},
    {
		id: "validate-schema-with-data",
	    title: "Validating JSON data against the schema",
	    order: 4,
	    doc: "/",
	},
];