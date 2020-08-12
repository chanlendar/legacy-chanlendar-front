import React from "react";
import moment from "moment";

function MonthlyCalendar() {
	const weekDaysShort = getWeekDaysShort();
	const dateObject = moment();
	const firstDay = firstDayOfMonth(dateObject);
	const blanks = fillFirstDateOfMonth(firstDay);
	const days = getDays(dateObject.daysInMonth());
	const totalDays = getTotalDays(blanks, days);

	return (
		<div>
			<table>
				<thead>
					<tr>{weekDaysShort}</tr>
				</thead>
				<tbody>{totalDays}</tbody>
			</table>
		</div>
	);
}

const getWeekDaysShort = () => {
	return moment.weekdaysShort().map((v) => {
		return <td key={"weekday" + v}>{v}</td>;
	});
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
		<td key={"blanks" + i}>{""}</td>
	));
	return blanks;
};

const getDays = (numberOfDays) => {
	const days = Array(numberOfDays)
		.fill("")
		.map((v, i) => {
			return <td key={"days" + i}>{i + 1}</td>;
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
		return <tr key={"rows" + i}>{days}</tr>;
	});

	return totalDays;
};

export default MonthlyCalendar;
