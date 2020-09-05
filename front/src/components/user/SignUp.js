import React from "react";

import { Slide, TextField, Grid, Button, Typography } from "@material-ui/core/";

import knifeGirl from "../../images/knife-girl.svg";
import Illust from "./Illust";

function SignUp({ setLogIn, isOpend }) {
	return (
		<Slide in={isOpend} direction="left" timeout={200}>
			<Grid container direction="column" spacing={3}>
				<Grid item style={{ textAlign: "-webkit-center" }}>
					<Illust src={knifeGirl} />
				</Grid>
				<Grid item>
					<Typography align="center" variant="h4" color="textSecondary">
						회원 가입
					</Typography>
				</Grid>
				<Grid container item alignItems="center" justify="space-around">
					<Grid item xs={3}>
						<Typography variant="body2" align="center" color="textPrimary">
							닉네임
						</Typography>
					</Grid>
					<Grid item xs={9}>
						<TextField fullWidth variant="outlined" label="NICKNAME" />
					</Grid>
				</Grid>
				<Grid container item alignItems="center" justify="space-around">
					<Grid item xs={3}>
						<Typography variant="body2" align="center" color="textPrimary">
							이메일
						</Typography>
					</Grid>
					<Grid item xs={9}>
						<TextField fullWidth variant="outlined" label="EMAIL" />
					</Grid>
				</Grid>
				<Grid container item alignItems="center" justify="space-around">
					<Grid item xs={3}>
						<Typography variant="body2" align="center" color="textPrimary">
							비밀번호
						</Typography>
					</Grid>
					<Grid item xs={9}>
						<TextField
							fullWidth
							variant="outlined"
							label="PASSWORD"
							type="password"
						/>
					</Grid>
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
