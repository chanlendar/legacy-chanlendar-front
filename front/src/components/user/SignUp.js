import React from "react";

import Slide from "@material-ui/core/Slide";
import Button from "@material-ui/core/Button";

function SignUp({ setLogIn, isOpend }) {
	return (
		<Slide in={isOpend} direction="left" timeout={200}>
			<div>
				회원가입 화면이다 이거야
				<Button onClick={setLogIn}>뒤로 가기</Button>
			</div>
		</Slide>
	);
}

export default SignUp;
