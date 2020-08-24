import React from "react";
import { TableContainer, Table } from "@material-ui/core";

import CalendarHeader from "./CalendarHeader";
import CalendarContents from "./CalendarContent";

function Calendar() {
	return (
		<TableContainer>
			<Table>
				<CalendarHeader></CalendarHeader>
				<CalendarContents></CalendarContents>
			</Table>
		</TableContainer>
	);
}

export default Calendar;
