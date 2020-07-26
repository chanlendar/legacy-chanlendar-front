import React from "react";
import {
	Container,
	Card,
	CardHeader,
	CardContent,
	Typography,
	List,
	ListItem,
	ListItemText,
} from "@material-ui/core";

import { useContainerStyles, useCardStyles } from "../styles";

function Contents() {
	const containerStyles = useContainerStyles();
	const cardStyles = useCardStyles();

	return (
		<div className={containerStyles.root}>
			<Container fixed>
				<Card className={cardStyles.root}>
					<CardHeader title="2020/07/26" subheader="Daily List" />
					<CardContent>
						<List>
							<ListItem>
								<ListItemText
									primary={
										<Typography>
											connect the signal
										</Typography>
									}
									secondary={
										<Typography variant="body2">
											godot community
										</Typography>
									}
								/>
							</ListItem>
							<ListItem>
								<ListItemText
									primary={
										<Typography>primary text</Typography>
									}
									secondary={
										<Typography variant="body2">
											axcent
										</Typography>
									}
								/>
							</ListItem>
							<ListItem>
								<ListItemText
									primary={
										<Typography>react community</Typography>
									}
									secondary={
										<Typography variant="body2">
											devcord
										</Typography>
									}
								/>
							</ListItem>
						</List>
					</CardContent>
				</Card>
			</Container>
		</div>
	);
}

export default Contents;
