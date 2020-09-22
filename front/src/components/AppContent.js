import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import Grid from "@material-ui/core/Grid";
import moment from "moment";
import axios from "axios";

import Topics from "components/topic/Topics";
import Menu from "components/menu/Menu";
import Content from "components/content/Content";
import useGridStyles from "styles/AppContent";

function AppContent() {
	const gridStyles = useGridStyles();
	const [cookies, setCookies] = useCookies(["accessToken", "refreshToken"]);

	useEffect(() => {
		const tokenRenewal = async () => {
			const result = await axios.post("/jwt/tokens", {
				refreshToken: cookies.refreshToken,
			});

			const accessExpireDays = moment()
				.add(1, "days")
				.toDate();
			const refreshExpireDays = moment()
				.add(30, "days")
				.toDate();
			setCookies("accessToken", result.data.accessToken, {
				path: "/",
				expires: accessExpireDays,
			});
			setCookies("refreshToken", result.data.refreshToken, {
				path: "/",
				expires: refreshExpireDays,
			});
		};
		tokenRenewal();
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

export default AppContent;
