import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { TableRow, TableCell, ButtonBase } from "@material-ui/core";
import moment from "moment";

import { ADD_MONTH_EVENT, SUBTRACT_MONTH_EVENT } from "../../reducers";

function CalendarTitle() {
	const date = useSelector((state) => state.date);

	const dispatch = useDispatch();
	const onAddClick = () => {
		dispatch({ type: ADD_MONTH_EVENT, data: date });
	};
	const onSubtractClick = () => {
		dispatch({ type: SUBTRACT_MONTH_EVENT, data: date });
	};

	return (
		<TableRow>
			<TableCell align="center">
				<ButtonBase onClick={onSubtractClick}>&lt;</ButtonBase>
			</TableCell>
			<TableCell colSpan="5" align="center">
				{date.format("MM MMM - YYYY")}
			</TableCell>
			<TableCell align="center">
				<ButtonBase onClick={onAddClick}>&gt;</ButtonBase>
			</TableCell>
		</TableRow>
	);
}

export default CalendarTitle;
