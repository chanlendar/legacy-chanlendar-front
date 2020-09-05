import React from "react";

import { Grow, Button, Grid, TextField, Typography } from "@material-ui/core";

import { useUnSelectStyles } from "../../styles";
import knifeGirl from "../../images/knife-girl.svg";
import Illust from "./Illust";

function LogIn({ setLogIn, isOpend }) {
	const unSelectStyles = useUnSelectStyles();
	return (
		<Grow in={isOpend} timeout={1000}>
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
						로그인
					</Typography>
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
						<Button variant="outlined" onClick={setLogIn}>
							회원가입
						</Button>
					</Grid>
					<Grid item>
						<Button color="primary" variant="outlined">
							로그인
						</Button>
					</Grid>
				</Grid>
			</Grid>
		</Grow>
	);
}

export default LogIn;
