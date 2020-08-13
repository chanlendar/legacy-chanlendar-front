import React from "react";
import CalendarHeader from "./CalendarHeader";
import CalendarWeekdays from "./CalendarWeekdays";
import CalendarContents from "./CalendarContents";

function Calendar() {
	return (
		<div>
			<CalendarHeader></CalendarHeader>
			<CalendarWeekdays />
			<CalendarContents></CalendarContents>
		</div>
	);
}

export default Calendar;
