import React from "react";

import { Slide, TextField, Grid, Button, Typography } from "@material-ui/core/";

import { useUnSelectStyles } from "../../styles";
import knifeGirl from "../../images/knife-girl.svg";
import Illust from "./Illust";

function SignUp({ setLogIn, isOpend }) {
	const unSelectStyles = useUnSelectStyles();
	return (
		<Slide in={isOpend} direction="left" timeout={200}>
			<Grid container direction="column" spacing={3}>
				<Grid
					item
					style={{ textAlign: "-webkit-center" }}
					className={unSelectStyles.unselectable}
				>
					<Illust src={knifeGirl} />
				</Grid>
				<Grid item>
					<Typography align="center" variant="h4" color="textSecondary">
						회원 가입
					</Typography>
				</Grid>
				<Grid item>
					<TextField fullWidth variant="outlined" label="NICKNAME" />
				</Grid>
				<Grid item>
					<TextField fullWidth variant="outlined" label="EMAIL" />
				</Grid>
				<Grid item>
					<TextField
						fullWidth
						variant="outlined"
						label="PASSWORD"
						type="password"
					/>
				</Grid>
				<Grid container item justify="flex-end" spacing={1}>
					<Grid item>
						<Button color="secondary" variant="outlined" onClick={setLogIn}>
							뒤로가기
						</Button>
					</Grid>
					<Grid item>
						<Button color="primary" variant="outlined">
							가입
						</Button>
					</Grid>
				</Grid>
			</Grid>
		</Slide>
	);
}

export default SignUp;
