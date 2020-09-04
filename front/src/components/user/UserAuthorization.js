import React from "react";

import { useBoolean } from "../../hooks";
import { useAuthStyles } from "../../styles";
import SignUp from "./SignUp";
import LogIn from "./LogIn";

function UserAuthorization() {
	const authStyles = useAuthStyles();
	const [isLogInOpend, setLogInTrue, setLogInFalse] = useBoolean(true);

	return (
		<div className={authStyles.container}>
			{isLogInOpend && <LogIn setLogIn={setLogInFalse} isOpend={isLogInOpend} />}
			{!isLogInOpend && <SignUp setLogIn={setLogInTrue} isOpend={!isLogInOpend} />}
		</div>
	);
}

export default UserAuthorization;
