import React from "react";
import { TableRow, TableCell } from "@material-ui/core";
import moment from "moment";

function CalendarWeekdays() {
	const weekDays = getWeekDaysShort();
	return <TableRow>{weekDays}</TableRow>;
}

const getWeekDaysShort = () => {
	return moment.weekdaysShort().map((v) => {
		return <TableCell key={"weekday" + v} align="center">{v.toUpperCase()}</TableCell>;
	});
};

export default CalendarWeekdays;
