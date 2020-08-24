import React from "react";
import Grid from "@material-ui/core/Grid";

import TopicList from "./topic/Topics";
import MenuBar from "./menu/MenuBar";
import Content from "./content/Content";

import { useGridStyles } from '../styles';

function AppLayout() {
	const gridStyles = useGridStyles();

	return (
		<Grid container direction="row">
			<Grid item>
				<TopicList></TopicList>
			</Grid>
			<Grid item className={gridStyles.item}>
				<Grid container item direction="column">
					<Grid item>
						<MenuBar></MenuBar>
					</Grid>
					<Grid item>
						<Content></Content>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
}

export default AppLayout;
