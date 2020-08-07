import React from "react";
import { Modal, Typography, TextField } from "@material-ui/core";
import { usePopupStyles } from "../styles";

function TopicPopup({ open, onClose }) {
    const popupStyles = usePopupStyles();
	return (
		<Modal open={open} onClose={onClose}>
            <div className={popupStyles.popup}>
                <Typography align="center" variant="h5" style={{marginTop:"15px"}}>토픽 만들기</Typography>
                <Typography align="center" style={{marginTop:"5px"}}>어떤 주제인가요?</Typography>
                <form>
                    <TextField variant="filled" label="토픽이름"/>
                </form>
            </div>
        </Modal>
	);
}

export default TopicPopup;
