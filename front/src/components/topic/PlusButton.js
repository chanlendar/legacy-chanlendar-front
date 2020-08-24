import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Avatar, Button, Grid, TextField } from "@material-ui/core";

import {
	OPEN_TOPIC_MODAL_EVENT,
	CLOSE_TOPIC_MODAL_EVENT,
	ADD_TOPIC_EVENT,
} from "../../reducers";
import {
	useTopicStyles,
	useTopicButtonStyles,
	CustomTooltip,
	useModalStyles,
} from "../../styles";
import CustomModal from "../CustomModal";
import { useOpenAndCloseEvent, useInput } from "../../hooks";

function PlusButton() {
	const topicStyles = useTopicStyles();
	const buttonStyles = useTopicButtonStyles();
	const modalStyles = useModalStyles();

	const isOpend = useSelector((state) => state.isTopicModalOpend);
	const avatarVariant = isOpend ? "rounded" : "circle";

	const [input, onInputChange] = useInput("");
	const dispatch = useDispatch();
	const onCreateClick = (e) => {
		dispatch({ type: ADD_TOPIC_EVENT, data: input });
	};

	const [openEvent, closeEvent] = useOpenAndCloseEvent(
		OPEN_TOPIC_MODAL_EVENT,
		CLOSE_TOPIC_MODAL_EVENT,
	);

	return (
		<Grid className={topicStyles.root} item>
			<CustomTooltip title="토픽 추가하기" placement="right" arrow>
				<Avatar className={topicStyles.circle} variant={avatarVariant}>
					<Button className={buttonStyles.root} onClick={openEvent}>
						+
					</Button>
				</Avatar>
			</CustomTooltip>
			<CustomModal
				title="토픽 만들기"
				description="어떤 주제인가요?"
				isOpend={isOpend}
				onCloseClick={closeEvent}
			>
				<form>
					<TextField
						variant="filled"
						label="토픽이름"
						autoFocus
						fullWidth
						onChange={onInputChange}
					/>
				</form>
				<div className={modalStyles.buttons}>
					<Button
						variant="outlined"
						onClick={closeEvent}
						style={{ marginRight: "10px" }}
					>
						X
					</Button>
					<Button variant="contained" onClick={onCreateClick}>
						만들기
					</Button>
				</div>
			</CustomModal>
		</Grid>
	);
}

export default PlusButton;
