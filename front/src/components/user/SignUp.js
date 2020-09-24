import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TextField, Grid, Button, Typography, Snackbar } from "@material-ui/core/";
import styled from "styled-components";

import { useInput } from "hooks";
import {
	SIGN_UP_USER_REQUEST,
	SIGN_UP_USER_MESSAGE_CLOSE,
	LOG_IN_WINDOW_OPEN,
} from "reducers/user";
import useUnSelectStyles from "styles/user";
import knifeGirl from "images/knife-girl.svg";
import Illust from "./Illust";

const FullWidthForm = styled.form`
	width: 100%;
`;

function SignUp() {
	const dispatch = useDispatch();
	const { signUpLoading, signUpDone } = useSelector((state) => state.user);
	const unSelectStyles = useUnSelectStyles();

	const [nickname, onNicknameChange, setNickname] = useInput("");
	const [email, onEmailChange, setEmail] = useInput("");
	const [password, onPasswordChange, setPassword] = useInput("");

	const onSnackClose = useCallback(
		(e) => {
			dispatch({ type: SIGN_UP_USER_MESSAGE_CLOSE });
		},
		[dispatch],
	);

	const onSubmit = useCallback(
		(e) => {
			// e.preventDefault();
			// dispatch({
			// 	type: SIGN_UP_USER_REQUEST,
			// 	data: {
			// 		nickname,
			// 		email,
			// 		password,
			// 	},
			// });
		},
		[nickname, email, password, dispatch],
	);

	const onClick = useCallback(
		(e) => {
			dispatch({
				type: LOG_IN_WINDOW_OPEN,
			});
		},
		[dispatch],
	);

	useEffect(() => {
		if (signUpDone) {
			setNickname("");
			setEmail("");
			setPassword("");
		}
	}, [signUpDone, setNickname, setEmail, setPassword]);

	return (
		<FullWidthForm onSubmit={onSubmit}>
			<Snackbar
				open={signUpDone}
				onClose={onSnackClose}
				autoHideDuration={1500}
				message={"회원 가입에 성공했습니다."}
			/>
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
					<TextField
						fullWidth
						variant="outlined"
						label="NICKNAME"
						required
						value={nickname}
						onChange={onNicknameChange}
					/>
				</Grid>
				<Grid item>
					<TextField
						fullWidth
						variant="outlined"
						label="EMAIL"
						required
						value={email}
						onChange={onEmailChange}
					/>
				</Grid>
				<Grid item>
					<TextField
						fullWidth
						variant="outlined"
						label="PASSWORD"
						type="password"
						required
						value={password}
						onChange={onPasswordChange}
					/>
				</Grid>
				<Grid container item justify="flex-end" spacing={1}>
					<Grid item>
						<Button
							variant="outlined"
							onClick={onClick}
							disabled={signUpLoading}
						>
							뒤로가기
						</Button>
					</Grid>
					<Grid item>
						<Button
							color="primary"
							variant="outlined"
							type="submit"
							onClick={onSubmit}
							disabled={signUpLoading}
						>
							가입
						</Button>
					</Grid>
				</Grid>
			</Grid>
		</FullWidthForm>
	);
}

export default SignUp;
