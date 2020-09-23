import React from "react";
import {
	Card,
	CardHeader,
	CardContent,
	Typography,
	List,
	ListItem,
	ListItemText,
} from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";

import { FINISH_TASK_EVENT, NOT_FINISH_TASK_EVENT } from "reducers/topic";
import { useCardStyles, useTaskStyles, CustomPaper } from "styles/content";

function DailyList({ topic }) {
	const cardStyles = useCardStyles();
	const taskStyles = useTaskStyles();
	const dispatch = useDispatch();

	const onClick = (id, isFinished) => (e) => {
		dispatch({
			type: isFinished ? NOT_FINISH_TASK_EVENT : FINISH_TASK_EVENT,
			data: { topicId: topic.id, taskId: id },
		});
	};
	// ex) 2020-08-09
	const day = useSelector((state) => state.topic.day).format("YYYY-MM-DD");
	const subheaderText = `${day} - Daily List`;
	const tasksOfday = topic.Tasks.filter((v) => {
		return v.taskDate.isSame(day, "day");
	});

	return (
		<Card className={cardStyles.root}>
			<CardHeader title={topic.title} subheader={subheaderText} />
			<CardContent>
				<List>
					{tasksOfday.map((v) => (
						<CustomPaper
							variant="outlined"
							key={v.id}
							onClick={onClick(v.id, v.isFinished)}
							className={
								(taskStyles.root,
								v.isFinished
									? taskStyles.finished
									: taskStyles.notFinished)
							}
						>
							<ListItem>
								<ListItemText
									primary={<Typography>{v.task}</Typography>}
								/>
							</ListItem>
						</CustomPaper>
					))}
				</List>
			</CardContent>
		</Card>
	);
}

export default DailyList;
