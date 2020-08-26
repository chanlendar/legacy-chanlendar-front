import React from "react";
import { TableHead } from "@material-ui/core";
import CalendarWeekdays from "./CalendarWeekdays";
import CalendarTitle from "./CalendarTitle";

function CalendarHeader() {
	return (
		<TableHead>
			<CalendarTitle></CalendarTitle>
			<CalendarWeekdays />
		</TableHead>
	);
}

export default CalendarHeader;
