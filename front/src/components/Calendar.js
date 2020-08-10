import React from "react";
import { Grid } from "@material-ui/core";
import DailyList from "./DailyList";
import MonthlyList from "./MonthlyList";

function Calendar({ topic }) {
	return (
		<Grid
			container
			direction="row"
			spacing={4}
			justify="center"
			alignItems="flex-start"
		>
			<Grid item xs={5} style={{ marginTop: "10px" }}>
				{topic && <DailyList topic={topic} />}
			</Grid>
			<Grid item xs style={{ marginTop: "10px" }}>
				<MonthlyList />
			</Grid>
		</Grid>
	);
}

export default Calendar;
