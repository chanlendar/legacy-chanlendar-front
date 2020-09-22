import React from "react";

import { useBoolean } from "hooks";
import { useAuthStyles } from "styles/user";
import SignUp from "./SignUp";
import LogIn from "./LogIn";

function UserAuthorization({ setAuth }) {
	// 쿠키 존재함 변수로 setAuth 설정

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
