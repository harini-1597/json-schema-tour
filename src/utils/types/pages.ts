export type Example = {
	id: number;
	inputText: string;
	outputText: string;
	explanation: string;
};

// local page data
export type Page = {
	id: string;
	title: string;
	problemStatement: string;
	examples: Example[];
	// constraints: string;
	order: number;
	starterCode: string;
	handlerFunction: (fn: any) => Promise<void> | string;
	starterFunctionName: string;
};

export type DBProblem = {
	id: string;
	title: string;
	category: string;
	difficulty: string;
	likes: number;
	dislikes: number;
	order: number;
	videoId?: string;
	link?: string;
};