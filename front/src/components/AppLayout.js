import React from "react";
import Grid from "@material-ui/core/Grid";

import TopicList from "./TopicList";
import MenuBar from "./MenuBar";
import Contents from "./Contents";

function AppLayout() {
	return (
		<Grid container direction="row">
			<Grid item>
				<TopicList></TopicList>
			</Grid>
			<Grid item>
				<Grid container item direction="column">
					<Grid item>
						<MenuBar></MenuBar>
					</Grid>
					<Grid item>
						<Contents></Contents>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
}

export default AppLayout;
