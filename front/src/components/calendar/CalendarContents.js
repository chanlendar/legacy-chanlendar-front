import React from "react";
import { TableBody } from "@material-ui/core";

import CalendarDays from "./CalendarDays";

function CalendarContents() {
	return (
		<TableBody>
			<CalendarDays></CalendarDays>
		</TableBody>
	);
}

export default CalendarContents;
