import React from "react";
import Grid from "@material-ui/core/Grid";

import Topics from "components/topic/Topics";
import Menu from "components/menu/Menu";
import Content from "components/content/Content";
import useGridStyles from "styles/AppContent";

function AppContent() {
	const gridStyles = useGridStyles();
	return (
		<Grid container direction="row">
			<Grid item>
				<Topics />
			</Grid>
			<Grid item className={gridStyles.item}>
				<Grid container item direction="column">
					<Grid item>
						<Menu />
					</Grid>
					<Grid item>
						<Content />
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
}

export default AppContent;
