import React from "react";
import { useSelector } from "react-redux";
import { TableRow, TableCell } from "@material-ui/core";
import moment from "moment";

function CalendarDays() {
	const date = useSelector((state) => state.date);
	const days = getDaysAllInOne(date);

	return <>{days}</>;
}

const getDaysAllInOne = (date) => {
	const firstDay = firstDayOfMonth(date);
	const blanks = fillFirstDateOfMonth(firstDay);
    const days = getDays(date.daysInMonth());
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

const getDays = (numberOfDays) => {
	const days = Array(numberOfDays)
		.fill("")
		.map((_, i) => {
			return (
				<TableCell key={"days" + i} align="center">
					{i + 1}
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
