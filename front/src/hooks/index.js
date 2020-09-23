import { useState } from "react";
import { useDispatch } from "react-redux";
import { useCookies } from "react-cookie";

export const useInput = (state) => {
	const [input, setInput] = useState(state);

	const onInputChange = (e) => {
		setInput(e.target.value);
	};

	return [input, onInputChange, setInput];
};

export const useBoolean = (state) => {
	const [input, setInput] = useState(state);

	const onInputTrue = () => {
		setInput(true);
	};

	const onInputFalse = () => {
		setInput(false);
	};

	return [input, onInputTrue, onInputFalse];
};

export const useMultipleEvents = (firstEvent, secondEvent, firstData, secondData) => {
	const dispatch = useDispatch();

	const firstEventDispatch = () => {
		dispatch({ type: firstEvent, data: firstData });
	};

	const secondEventDispatch = () => {
		dispatch({ type: secondEvent, data: secondData });
	};

	return [firstEventDispatch, secondEventDispatch];
};

export const useAccessTokenRequest = (requestType) => {
	const dispatch = useDispatch();

	const [cookies] = useCookies(["accessToken"]);

	return () => {
		dispatch({ type: requestType, data: { accessToken: cookies.accessToken } });
	};
};
