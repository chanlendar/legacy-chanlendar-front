import React from "react";

import { useBoolean } from "../../hooks";
import SignUp from "./SignUp";
import LogIn from "./LogIn";

function UserAuthorization() {
	const [isLogInOpend, setLogInTrue, setLogInFalse] = useBoolean(true);

	return (
		<>
			{isLogInOpend && <LogIn setLogIn={setLogInFalse} />}
			{!isLogInOpend && <SignUp setLogIn={setLogInTrue} />}
		</>
	);
}

export default UserAuthorization;
