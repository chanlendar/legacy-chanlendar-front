import React from "react";
import { useSelector } from "react-redux";
import { Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Topic from "./Topic";
import PlusButton from "./PlusButton";


const useStyles = makeStyles((theme) => ({
	root: {
		width: "70px",
		height: "100vh",
		background: "#212529",
		color: "white",
	},
}));

function TopicList() {
	const classes = useStyles();
	const topics = useSelector((state) => state.Topics);

	return (
		<Paper square className={classes.root}>
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
