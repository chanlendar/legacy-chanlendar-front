import React from "react";

import { Modal, Fade, Typography } from "@material-ui/core";

function CustomModal({
	title,
    description,
    isOpend,
    onCloseClick,
	children,
}) {
	return (
		isOpend && (
			<Modal open={isOpend} onClose={onCloseClick}>
				<Fade in={isOpend}>
					<div>
						<Typography align="center" variant="h5">
							{title}
						</Typography>
						<Typography align="center" variant="h5">
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
