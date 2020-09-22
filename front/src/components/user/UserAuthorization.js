import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useCookies } from "react-cookie";
import moment from "moment";

import { useBoolean } from "hooks";
import { AUTHENTICATE_USER_SUCCESS } from "reducers/user";
import { useAuthStyles } from "styles/user";
import SignUp from "./SignUp";
import LogIn from "./LogIn";

function UserAuthorization() {
	const tokens = useSelector((state) => state.user.tokens);
	const dispatch = useDispatch();
	const [cookies, setCookie] = useCookies(["refreshToken"]);

	if (tokens) {
		const accessExpireDays = moment()
			.add(1, "days")
			.toDate();
		const refreshExpireDays = moment()
			.add(30, "days")
			.toDate();
		setCookie("accessToken", tokens.accessToken, {
			path: "/",
			expires: accessExpireDays,
		});
		setCookie("refreshToken", tokens.refreshToken, {
			path: "/",
			expires: refreshExpireDays,
		});

		dispatch({ type: AUTHENTICATE_USER_SUCCESS });
	}

	if (!!cookies["refreshToken"]) {
		dispatch({ type: AUTHENTICATE_USER_SUCCESS });
	}

	const authStyles = useAuthStyles();
	const [isLogInOpened, setLogInTrue, setLogInFalse] = useBoolean(true);

	return (
		<div className={authStyles.container}>
			{isLogInOpened && <LogIn setLogIn={setLogInFalse} isOpend={isLogInOpened} />}
			{!isLogInOpened && (
				<SignUp setLogIn={setLogInTrue} isOpend={!isLogInOpened} />
			)}
		</div>
	);
}

export default UserAuthorization;
