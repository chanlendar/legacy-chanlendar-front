import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { TableRow, TableCell, Button } from "@material-ui/core";
import { ADD_MONTH_EVENT, SUBTRACT_MONTH_EVENT } from "reducers/topic";

function CalendarTitle() {
	const date = useSelector((state) => state.topic.date);

	const dispatch = useDispatch();
	const onAddClick = () => {
		dispatch({ type: ADD_MONTH_EVENT });
	};
	const onSubtractClick = () => {
		dispatch({ type: SUBTRACT_MONTH_EVENT });
	};

	return (
		<TableRow>
			<TableCell align="center">
				<Button onClick={onSubtractClick}>&lt;</Button>
			</TableCell>
			<TableCell colSpan="5" align="center">
				{date.format("MM MMM - YYYY")}
			</TableCell>
			<TableCell align="center">
				<Button onClick={onAddClick}>&gt;</Button>
			</TableCell>
		</TableRow>
	);
}

export default CalendarTitle;
