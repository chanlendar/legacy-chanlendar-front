import React from "react";
import { useSelector } from "react-redux";

import AppContent from "./AppContent";
import UserAuthorization from "./user/UserAuthorization";

function AppLayout() {
	const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

	return (
		<>
			{isAuthenticated && <AppContent />}
			{!isAuthenticated && <UserAuthorization />}
		</>
	);
}

export default AppLayout;
