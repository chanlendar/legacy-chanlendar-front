import React from "react";
import { Avatar, Button, Grid, } from "@material-ui/core";

import { useTopicStyles, useTopicButtonStyles, CustomTooltip } from "../styles";

function PlusButton() {
    const topicStyles = useTopicStyles();
    const buttonStyles = useTopicButtonStyles();

	return (
		<Grid className={topicStyles.root} item>
			<CustomTooltip title="토픽 추가하기" placement="right" arrow>
				<Avatar className={topicStyles.circle}>
					<Button className={buttonStyles.root}>+</Button>
				</Avatar>
			</CustomTooltip>
		</Grid>
	);
}

export default PlusButton;
