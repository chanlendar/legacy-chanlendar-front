import React from "react";
import { createGlobalStyle } from "styled-components";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import AppLayout from "./components/AppLayout";

const GlobalStyle = createGlobalStyle`
	body {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		background-color: #343a40;
	}
`;

function App() {
	const darkMode = createMuiTheme({
		overrides: {
			MuiTypography: {
				body2: {
					color: "#adb5bd",
				},
			},
		},
		palette: {
			type: "dark",
		},
	});
	return (
		<ThemeProvider theme={darkMode}>
			<GlobalStyle />
			<AppLayout />
		</ThemeProvider>
	);
}

export default App;
