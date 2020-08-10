import React from "react";

import { Modal, Fade, Button, Typography } from "@material-ui/core";

function CustomModal({
	isOpend,
	title,
	description,
	onCreateClick,
	onCloseClick,
	form,
}) {
	return (
		isOpend && (
			<Modal open={isOpend}>
				<Fade in={isOpend}>
					<div>
						<Typography align="center" variant="h5">
							{title}
						</Typography>
						<Typography align="center" variant="h5">
							{description}
						</Typography>
						{form}
						<div>
							<Button variant="outlined" onClick={onCloseClick}>
								X
							</Button>
							<Button variant="contained" onClick={onCreateClick}>
								만들기
							</Button>
						</div>
					</div>
				</Fade>
			</Modal>
		)
	);
}

export default CustomModal;
