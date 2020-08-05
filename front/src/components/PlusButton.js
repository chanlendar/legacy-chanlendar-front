import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Avatar, Button, Grid } from "@material-ui/core";

import TopicPopup from "../components/TopicPopup";
import { OPEN_MODAL_EVENT, CLOSE_MODAL_EVENT } from "../reducers";
import { useTopicStyles, useTopicButtonStyles, CustomTooltip } from "../styles";

function PlusButton() {
	const topicStyles = useTopicStyles();
	const buttonStyles = useTopicButtonStyles();
	const dispatch = useDispatch();
	const isOpend = useSelector((state) => state.isOpend);

	const onAddClick = (e) => {
		dispatch({ type: OPEN_MODAL_EVENT });
	};

	const onClose = (e) => {
		dispatch({ type: CLOSE_MODAL_EVENT });
	};

	return (
		<Grid className={topicStyles.root} item>
			<CustomTooltip title="토픽 추가하기" placement="right" arrow>
				<Avatar className={topicStyles.circle}>
					<Button className={buttonStyles.root} onClick={onAddClick}>
						+
					</Button>
				</Avatar>
			</CustomTooltip>
			<TopicPopup open={isOpend} onClose={onClose}/>
		</Grid>
	);
}

export default PlusButton;
