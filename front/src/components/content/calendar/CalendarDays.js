import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { TableRow, TableCell, Button } from "@material-ui/core";
import moment from "moment";
import { CHANGE_DAY_EVENT } from "../../../reducers/topic";
import { useTableButtonStyles } from "../../../styles";

function CalendarDays() {
	const buttonStyles = useTableButtonStyles();
	const dispatch = useDispatch();

	const onClick = useCallback(
		(day) => () => {
			dispatch({
				type: CHANGE_DAY_EVENT,
				data: day,
			});
		},
		[dispatch],
	);
	const date = useSelector((state) => state.topic.date);
	const days = getDaysAllInOne(date, buttonStyles, onClick);

	return <>{days}</>;
}

const getDaysAllInOne = (date, buttonStyles, onClick) => {
	const firstDay = firstDayOfMonth(date);
	const blanks = fillFirstDateOfMonth(firstDay);
	const days = getDays(date.daysInMonth(), buttonStyles, onClick);
	const totalDays = getTotalDays(blanks, days);

	return totalDays;
};

const firstDayOfMonth = (dateObject) => {
	const date = dateObject;
	const firstDay = moment(date)
		.startOf("month")
		.format("d");
	return firstDay;
};

const fillFirstDateOfMonth = (firstDay) => {
	const blanks = Array.from({ length: firstDay }, (_, i) => (
		<TableCell key={"blanks" + i}>{""}</TableCell>
	));
	return blanks;
};

const getDays = (numberOfDays, buttonStyles, onClick) => {
	const days = Array(numberOfDays)
		.fill("")
		.map((_, i) => {
			return (
				<TableCell key={"days" + i} align="center">
					{/* 여기에 클릭이벤트 추가 */}
					<Button
						classes={{ root: buttonStyles.root }}
						onClick={onClick(i + 1)}
					>
						{i + 1}
					</Button>
				</TableCell>
			);
		});
	return days;
};

const getTotalDays = (blanks, days) => {
	const totalDaysInMonth = [...blanks, ...days];
	let rows = [];
	let cells = [];

	totalDaysInMonth.forEach((day, i) => {
		if (i % 7 !== 0) cells.push(day);
		else {
			rows.push(cells);
			cells = [];
			cells.push(day);
		}
		if (i === totalDaysInMonth.length - 1) rows.push(cells);
	});

	const totalDays = rows.map((days, i) => {
		return <TableRow key={"rows" + i}>{days}</TableRow>;
	});

	return totalDays;
};

export default CalendarDays;
