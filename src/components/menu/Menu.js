import React from "react";
import { AppBar, Toolbar, Button, ButtonGroup } from "@material-ui/core";

import { useAppBarStyles } from "../../styles";

function Menu() {
	const appBarStyles = useAppBarStyles();

	return (
		<AppBar position="sticky" className={appBarStyles.root}>
			<Toolbar className={appBarStyles.toolbar}>
				<ButtonGroup variant="text" className={appBarStyles.button}>
					<Button className={appBarStyles.button}>Calendar</Button>
					<Button className={appBarStyles.button}>Task</Button>
				</ButtonGroup>
				<Button className={appBarStyles.button}>Option</Button>
			</Toolbar>
		</AppBar>
	);
}

export default Menu;
