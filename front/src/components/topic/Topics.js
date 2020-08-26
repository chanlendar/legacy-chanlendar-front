import React from "react";
import { useSelector } from "react-redux";
import { Grid, Paper } from "@material-ui/core";

import { useTopicsStyles } from '../../styles';
import Topic from "./Topic";
import PlusButton from "./PlusButton";


function Topics() {
	const topicsStyles = useTopicsStyles();
	const topics = useSelector((state) => state.topic.Topics);
	const main = {
		id: 'main',
		title: 'Main',
	};
	return (
		<Paper square className={topicsStyles.root}>
			<Grid container direction="column" alignItems="center">
				{/* MainTopic 만들기 */}
				<Topic topic={main} key={main.id} />
				{topics.map((v) => (
					<Topic topic={v} key={v.id} />
				))}
				<PlusButton />
			</Grid>
		</Paper>
	);
}

export default Topics;
