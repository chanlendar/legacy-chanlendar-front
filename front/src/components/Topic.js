import React from "react";
import { Avatar, Button, Grid } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { useTopicStyles, useTopicButtonStyles, CustomTooltip } from "../styles";
import { OPEN_TOPIC_EVENT } from "../reducers";

function Topic({ topic }) {
	const topicStyles = useTopicStyles();
	const button = useTopicButtonStyles();
	const isMine =
		useSelector((state) => state.currentTopic.title) === topic.title
			? "rounded"
			: "circle";

	const dispatch = useDispatch();
	const onClick = (e) => {
		dispatch({ type: OPEN_TOPIC_EVENT, data: topic });
	};
	
	return (
		<Grid className={topicStyles.root} item>
			<CustomTooltip title={topic.title} placement="right" arrow>
				<Avatar className={topicStyles.circle} variant={isMine}>
					<Button className={button.root} onClick={onClick}>
						{topic.title[0]}
					</Button>
				</Avatar>
			</CustomTooltip>
		</Grid>
	);
}

export default Topic;
