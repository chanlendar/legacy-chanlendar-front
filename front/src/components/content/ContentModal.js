import React from "react";
import { Button, TextField } from "@material-ui/core";

import { useModalStyles } from "../../styles";
import CustomModal from "../CustomModal";

function ContentModal({
	isOpend,
	onCloseClick,
	onInputChange,
	onCreateClick,
}) {
	const modalStyles = useModalStyles();

	return (
		<CustomModal
			title="태스크 만들기"
			description="무슨 일인가요?"
			isOpend={isOpend}
			onCloseClick={onCloseClick}
		>
			<form>
				<TextField
					variant="filled"
					label="태스크 이름"
					autoFocus
					fullWidth
					onChange={onInputChange}
				/>
			</form>
			<div className={modalStyles.buttons}>
				<Button
					variant="outlined"
					onClick={onCloseClick}
					style={{ marginRight: "10px" }}
				>
					X
				</Button>
				<Button variant="contained" onClick={onCreateClick}>
					만들기
				</Button>
			</div>
		</CustomModal>
	);
}

export default ContentModal;
