import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Avatar, Button, Grid } from "@material-ui/core";

import { OPEN_MODAL_EVENT, CLOSE_MODAL_EVENT } from "../reducers";
import { useTopicStyles, useTopicButtonStyles, CustomTooltip } from "../styles";
import CustomModal from "./CustomModal";
import { useOpenAndCloseEvent } from "../hooks";

function PlusButton() {
	const topicStyles = useTopicStyles();
	const buttonStyles = useTopicButtonStyles();
	const dispatch = useDispatch();
	const isOpend = useSelector((state) => state.isOpend);
	const avatarVariant = isOpend ? "rounded" : "circle";

	const [openEvent, closeEvent] = useOpenAndCloseEvent(OPEN_MODAL_EVENT, CLOSE_MODAL_EVENT);

	return (
		<Grid className={topicStyles.root} item>
			<CustomTooltip title="토픽 추가하기" placement="right" arrow>
				<Avatar className={topicStyles.circle} variant={avatarVariant}>
					<Button className={buttonStyles.root} onClick={onAddClick}>
						+
					</Button>
				</Avatar>
			</CustomTooltip>
			<CustomModal />
			{/* <TopicPopup open={isOpend} onClose={onClose} /> */}
		</Grid>
	);
}

export default PlusButton;
