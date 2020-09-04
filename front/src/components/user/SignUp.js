import React from "react";

import Button from "@material-ui/core/Button";

function SignUp({ setLogIn }) {
	return (
		<div>
			회원가입 화면이다 이거야
			<Button onClick={setLogIn}>뒤로 가기</Button>
		</div>
	);
}

export default SignUp;
