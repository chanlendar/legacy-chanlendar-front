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

import moment from "moment";

import { useCardStyles, CustomPaper } from "../styles";

function DailyList({ topic }) {
	const cardStyles = useCardStyles();

	// ex) 2020-08-09
	const today = moment().format("YYYY-MM-DD");
	const subheaderText = `${today} - Daily List`;
	const tasksOfToday = topic.Tasks.filter((v) => {
		return moment(v.date).isSame(today, "day");
	});

	return (
		<Card className={cardStyles.root}>
			<CardHeader title={topic.title} subheader={subheaderText} />
			<CardContent>
				<List>
					{tasksOfToday.map((v) => (
						<CustomPaper variant="outlined" key={v.id}>
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
