import React from "react";

import { useBoolean } from "../../hooks";
import SignUp from "./SignUp";
import LogIn from "./LogIn";

function UserAuthorization() {
	const [isLogInOpend, setLogInTrue, setLogInFalse] = useBoolean(true);

	return (
		<>
			{isLogInOpend && <LogIn setLogIn={setLogInFalse} isOpend={isLogInOpend} />}
			{!isLogInOpend && <SignUp setLogIn={setLogInTrue} isOpend={!isLogInOpend} />}
		</>
	);
}

export default UserAuthorization;
