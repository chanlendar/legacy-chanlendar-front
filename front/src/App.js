import React, { Component } from "react";
import { Button } from "@material-ui/core";
import styled from "styled-components";

const { app } = window.require("electron").remote;

const StyledBtn = styled.button`
	height: 35px;
	background: black;
	color: white;
	border: none;
	border-radius: 5px;
`;

class App extends Component {
	render() {
		return (
			<div className="App">
				<div className="App-header">
					<h2>React Redux Electron</h2>
				</div>
				<p className="App-intro">
					<b> Release </b>
					Version: {app.getVersion()}
				</p>
				<Button variant="contained" color="primary">
					hello world devtool열고싶어 시발
				</Button>
				<StyledBtn>StyledComponents</StyledBtn>
			</div>
		);
	}
}

export default App;
