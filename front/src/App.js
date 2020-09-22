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
	const darkTheme = createMuiTheme({
		props: {
			MuiTypography: {
				variantMapping: {
					body1: "div",
					body2: "p",
				},
			},
		},
		overrides: {
			MuiTypography: {
				colorTextPrimary: {
					color: "#f8f9fa",
				},
				colorTextSecondary: {
					color: "#adb5bd",
				},
			},
		},
		palette: {
			type: "dark",
		},
	});
	return (
		<ThemeProvider theme={darkTheme}>
			<GlobalStyle />
			<AppLayout />
		</ThemeProvider>
	);
}

export default App;