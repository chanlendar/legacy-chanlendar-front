import React from "react";

import { Modal, Fade, Typography } from "@material-ui/core";

import { useModalStyles } from "../styles";

function CustomModal({ title, description, isOpend, onCloseClick, children }) {
	const modalStyles = useModalStyles();
	return (
		isOpend && (
			<Modal open={isOpend} onClose={onCloseClick}>
				<Fade in={isOpend}>
					<div className={modalStyles.modal}>
						<Typography align="center" variant="h5">
							{title}
						</Typography>
						<Typography
							align="left"
							variant="body2"
							style={{ marginTop: "20px", marginBottom: "8px" }}
						>
							{description}
						</Typography>
						{children}
					</div>
				</Fade>
			</Modal>
		)
	);
}

export default CustomModal;
