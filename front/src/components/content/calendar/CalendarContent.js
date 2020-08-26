import React from "react";
import { TableBody } from "@material-ui/core";

import CalendarDays from "./CalendarDays";

function CalendarContent() {
	return (
		<TableBody>
			<CalendarDays></CalendarDays>
		</TableBody>
	);
}

export default CalendarContent;
