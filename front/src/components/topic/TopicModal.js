import React from "react";
import { Button, TextField } from "@material-ui/core";

import CustomModal from "../CustomModal";
import { useModalStyles } from "../../styles";

function TopicModal({ isOpend, onCreateClick, onCloseEvent, onInputChange }) {
	const modalStyles = useModalStyles();

	return (
		<CustomModal
			title="토픽 만들기"
			description="어떤 주제인가요?"
			isOpend={isOpend}
			onCloseClick={onCloseEvent}
			buttons={buttons(modalStyles, onCreateClick, onCloseEvent)}
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
		</CustomModal>
	);
}

const buttons = (modalStyles, onCreateClick, onCloseEvent) => {
	return (
		<div className={modalStyles.buttons}>
			<Button
				variant="outlined"
				onClick={onCloseEvent}
				style={{ marginRight: "10px" }}
			>
				X
			</Button>
			<Button variant="contained" onClick={onCreateClick}>
				만들기
			</Button>
		</div>
	);
};

export default TopicModal;
