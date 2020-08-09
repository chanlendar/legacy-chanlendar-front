/**
 * Need to remake the architecture if I need to make a [task]
 * 2020/08/09
 */
import React from "react";
import { Container, Grid } from "@material-ui/core";

import { useContainerStyles } from "../styles";
import DailyList from "./DailyList";
import MonthlyList from "./MonthlyList";

function Contents() {
	const containerStyles = useContainerStyles();

	return (
		<div className={containerStyles.root}>
			<Container fixed>
				<Grid
					container
					direction="row"
					spacing={4}
					justify="center"
					alignItems="flex-start"
				>
					<Grid item xs={5} style={{ marginTop: "64px" }}>
						<DailyList />
					</Grid>
					<Grid item xs style={{ marginTop: "64px" }}>
						<MonthlyList />
					</Grid>
				</Grid>
			</Container>
		</div>
	);
}

export default Contents;
