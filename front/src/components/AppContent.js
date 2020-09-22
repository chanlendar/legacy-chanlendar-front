import React from "react";
import Grid from "@material-ui/core/Grid";

import Topics from "./topic/Topics";
import Menu from "./menu/Menu";
import Content from "./content/Content";
import { useGridStyles } from "../styles";

function AppContent() {
	const gridStyles = useGridStyles();
	return (
		<Grid container direction="row">
			<Grid item>
				<Topics></Topics>
			</Grid>
			<Grid item className={gridStyles.item}>
				<Grid container item direction="column">
					<Grid item>
						<Menu></Menu>
					</Grid>
					<Grid item>
						<Content></Content>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
}

export default AppContent;
