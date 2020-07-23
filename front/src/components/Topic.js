import React from "react";
import { Avatar, Button, Grid } from "@material-ui/core";

import { topicStyles, topicButtonStyles, CustomTooltip } from "../styles";

function Topic({ topic }) {
	const classes = topicStyles();
	const button = topicButtonStyles();

	return (
		<Grid className={classes.root} item>
			<CustomTooltip title={topic.title} placement="right" arrow>
				<Avatar className={classes.circle}>
					<Button className={button.root}>{topic.title[0]}</Button>
				</Avatar>
			</CustomTooltip>
		</Grid>
	);
}

export default Topic;
