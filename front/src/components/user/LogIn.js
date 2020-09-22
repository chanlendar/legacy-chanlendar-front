import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { Grow, Button, Grid, TextField, Typography } from "@material-ui/core";

import { useInput } from "hooks";
import { LOG_IN_USER_REQUEST, SIGN_UP_WINDOW_OPEN } from "reducers/user";

import useUnSelectStyles from "styles/user";
import knifeGirl from "images/knife-girl.svg";
import Illust from "./Illust";

function LogIn() {
	const unSelectStyles = useUnSelectStyles();

	const dispatch = useDispatch();
	const [email, onEmail] = useInput("");
	const [password, onPassword] = useInput("");

	const onSubmit = useCallback(
		(e) => {
			e.preventDefault();
			dispatch({
				type: LOG_IN_USER_REQUEST,
				data: {
					email,
					password,
				},
			});
		},
		[email, password, dispatch],
	);

	const onClick = useCallback(
		(e) => {
			dispatch({
				type: SIGN_UP_WINDOW_OPEN,
			});
		},
		[dispatch],
	);

	return (
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
			<Grid item>
				<TextField
					fullWidth
					variant="outlined"
					label="EMAIL"
					value={email}
					onChange={onEmail}
				/>
			</Grid>
			<Grid item>
				<TextField
					fullWidth
					variant="outlined"
					label="PASSWORD"
					type="password"
					value={password}
					onChange={onPassword}
				/>
			</Grid>
			<Grid container item justify="flex-end" spacing={1}>
				<Grid item>
					<Button variant="outlined" onClick={onClick}>
						회원가입
					</Button>
				</Grid>
				<Grid item>
					<Button color="primary" variant="outlined" onClick={onSubmit}>
						로그인
					</Button>
				</Grid>
			</Grid>
		</Grid>
	);
}

export default LogIn;
