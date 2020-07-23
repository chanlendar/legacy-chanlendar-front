import React from "react";
import { Avatar, Button, Grid, } from "@material-ui/core";

import { topicStyles, topicButtonStyles, CustomTooltip } from "../styles";

function PlusButton() {
    const classes = topicStyles();
    const button = topicButtonStyles();

	return (
		<Grid className={classes.root} item>
			<CustomTooltip title="토픽 추가하기" placement="right" arrow>
				<Avatar className={classes.circle}>
					<Button className={button.root}>+</Button>
				</Avatar>
			</CustomTooltip>
		</Grid>
	);
}

export default PlusButton;
