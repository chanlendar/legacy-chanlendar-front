import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useCookies } from "react-cookie";
import Grid from "@material-ui/core/Grid";
import moment from "moment";
import axios from "axios";

import Topics from "components/topic/Topics";
import Menu from "components/menu/Menu";
import Content from "components/content/Content";
import useGridStyles from "styles/AppContent";

import { GET_TOPICS_REQUEST, TRANSFORM_TASK } from "reducers/topic";
import { useMultipleEvents } from "hooks";

function AppContent() {
	const gridStyles = useGridStyles();
	const [cookies, setCookies, removeCookies] = useCookies([
		"accessToken",
		"refreshToken",
	]);
	const dispatch = useDispatch();
	useEffect(() => {
		tokenRenewal(cookies, setCookies, removeCookies);
		// get topics (containing tasks)
		dispatch({ type: GET_TOPICS_REQUEST, data: cookies.accessToken });

		// get myinfo (profile: ex - email, nickname)
	}, []);

	return (
		<Grid container direction="row">
			<Grid item>
				<Topics />
			</Grid>
			<Grid item className={gridStyles.item}>
				<Grid container item direction="column">
					<Grid item>
						<Menu />
					</Grid>
					<Grid item>
						<Content />
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
}

const tokenRenewal = async (cookies, setCookies, removeCookies) => {
	const result = await axios.post("/jwt/tokens", {
		refreshToken: cookies.refreshToken,
	});
	removeCookies("accessToken");
	removeCookies("refreshToken");
	setCookies("accessToken", result.data.accessToken, {
		path: "/",
		expires: moment()
			.add(1, "days")
			.toDate(),
	});
	setCookies("refreshToken", result.data.refreshToken, {
		path: "/",
		expires: moment()
			.add(30, "days")
			.toDate(),
	});
};

export default AppContent;
