import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Avatar, Button, Grid } from "@material-ui/core";

import { OPEN_TOPIC_MODAL_EVENT, CLOSE_TOPIC_MODAL_EVENT, ADD_TOPIC_EVENT } from "../../reducers/topic";
import { useOpenAndCloseEvent, useInput } from "../../hooks";
import TopicModal from "./TopicModal";
import { useTopicStyles, useTopicButtonStyles, CustomTooltip } from "../../styles";

function PlusButton() {
	const topicStyles = useTopicStyles();
	const buttonStyles = useTopicButtonStyles();

	const isOpend = useSelector((state) => state.topic.isTopicModalOpend);
	const avatarVariant = isOpend ? "rounded" : "circle";

	const [input, onInputChange, setInput] = useInput("");
	const dispatch = useDispatch();

	const onCreateClick = (e) => {
		dispatch({ type: ADD_TOPIC_EVENT, data: input });
		setInput('');
	};

	const [onOpenEvent, onCloseEvent] = useOpenAndCloseEvent(OPEN_TOPIC_MODAL_EVENT, CLOSE_TOPIC_MODAL_EVENT);

	return (
		<Grid className={topicStyles.root} item>
			<CustomTooltip title="토픽 추가하기" placement="right" arrow>
				<Avatar className={topicStyles.circle} variant={avatarVariant}>
					<Button className={buttonStyles.root} onClick={onOpenEvent}>
						+
					</Button>
				</Avatar>
			</CustomTooltip>
			<TopicModal
				isOpend={isOpend}
				onCreateClick={onCreateClick}
				onCloseEvent={onCloseEvent}
				onInputChange={onInputChange}
			/>
		</Grid>
	);
}

export default PlusButton;
