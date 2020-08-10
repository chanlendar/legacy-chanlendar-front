import { useState } from "react";
import { useDispatch } from "react-redux";

export const useInput = (state) => {
	const [input, setInput] = useState(state);

	const onInputChange = (e) => {
		setInput(e.target.value);
	};

	return [input, setInput, onInputChange];
};

export const useOpenAndCloseEvent = (openEventType, closeEventType) => {
	const dispatch = useDispatch();

	const openEvent = (e) => {
		dispatch({ type: openEventType });
	};

	const closeEvent = (e) => {
		dispatch({ type: closeEventType });
	};

	return [openEvent, closeEvent];
};
