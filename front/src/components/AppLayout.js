import React, { useState } from "react";

import AppContent from "./AppContent";
import UserAuthorization from "./user/UserAuthorization";

function AppLayout() {
	const [isAuthenticated, setAuth] = useState(false);

	return isAuthenticated ? <AppContent /> : <UserAuthorization setAuth={setAuth} />;
}

export default AppLayout;
