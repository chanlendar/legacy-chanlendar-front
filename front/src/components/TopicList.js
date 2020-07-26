import React from "react";
import { useSelector } from "react-redux";
import { Grid, Paper } from "@material-ui/core";

import { useTopicListStyles } from '../styles';
import Topic from "./Topic";
import PlusButton from "./PlusButton";


function TopicList() {
	const topicListStyles = useTopicListStyles();
	const topics = useSelector((state) => state.Topics);

	return (
		<Paper square className={topicListStyles.root}>
			<Grid container direction="column" alignItems="center">
				{topics.map((v) => (
					<Topic topic={v} key={v.id} />
				))}
				<PlusButton />
			</Grid>
		</Paper>
	);
}

export default TopicList;
