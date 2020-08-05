import React from "react";
import { Modal } from "@material-ui/core";

function TopicPopup({ open, onClose }) {
	return (
		<Modal open={open} onClose={onClose}><div>우웅 눈나아</div></Modal>
	);
}

export default TopicPopup;
