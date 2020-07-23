import React from "react";
import { createGlobalStyle } from "styled-components";
import AppLayout from "./components/AppLayout";

const GlobalStyle = createGlobalStyle`
	body {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
`;

function App() {
	return (
		<>
			<GlobalStyle />
			<AppLayout />
		</>
	);
}

export default App;
