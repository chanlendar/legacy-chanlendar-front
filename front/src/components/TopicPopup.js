import React, { useState } from "react";
import { Modal, Typography, TextField, Fade, Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { usePopupStyles } from "../styles";
import { ADD_TOPIC_EVENT } from "../reducers";
function TopicPopup({ open, onClose }) {
	const popupStyles = usePopupStyles();
	const dispatch = useDispatch();
	const [topicText, setTopicText] = useState("");
	const [error, setError] = useState(false);

	const onTopicTextChenage = (e) => {
		setTopicText(e.target.value);
	};

	const createButtonClick = (e) => {
		if (!topicText) {
			setError(true);
		} else {
            setError(false);
            dispatch({ type: ADD_TOPIC_EVENT, data: topicText});
		}
	};

	return (
		<Modal open={open} onClose={onClose}>
			<Fade in={open}>
				<div className={popupStyles.popup}>
					<Typography
						align="center"
						variant="h5"
						style={{ marginTop: "20px" }}
					>
						토픽 만들기
					</Typography>
					<Typography align="center" style={{ marginTop: "5px" }}>
						어떤 주제인가요?
					</Typography>
					<form className={popupStyles.form}>
						<TextField
							variant="filled"
							label="토픽이름"
							autoFocus
							fullWidth
							onChange={onTopicTextChenage}
							error={error}
						/>
					</form>
					<div className={popupStyles.buttons}>
						<Button variant="outlined" onClick={onClose}>
							X
						</Button>
						<Button variant="contained" onClick={createButtonClick}>
							만들기
						</Button>
					</div>
				</div>
			</Fade>
		</Modal>
	);
}

export default TopicPopup;
