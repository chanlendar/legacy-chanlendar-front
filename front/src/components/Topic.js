import React from "react";
import { Avatar, Button, Grid } from "@material-ui/core";

import { useTopicStyles, useTopicButtonStyles, CustomTooltip } from "../styles";

function Topic({ topic }) {
	const topicStyles = useTopicStyles();
	const button = useTopicButtonStyles();

	return (
		<Grid className={topicStyles.root} item>
			<CustomTooltip title={topic.title} placement="right" arrow>
				<Avatar className={topicStyles.circle}>
					<Button className={button.root}>{topic.title[0]}</Button>
				</Avatar>
			</CustomTooltip>
		</Grid>
	);
}

export default Topic;
