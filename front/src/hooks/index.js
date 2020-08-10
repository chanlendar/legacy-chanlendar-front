import { useState } from "react";

export const useInput = (state) => {
	const [input, setInput] = useState(state);

	const onInputChange = (e) => {
		setInput(e.target.value);
	};

	return [input, setInput, onInputChange];
};
