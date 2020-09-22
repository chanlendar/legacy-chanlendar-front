import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { CookiesProvider } from "react-cookie";

import configureStore from "./store";
import App from "./App";
import "fontsource-roboto";

const store = configureStore();

ReactDOM.render(
	<Provider store={store}>
		<CookiesProvider>
			<App />
		</CookiesProvider>
	</Provider>,
	document.getElementById("root"),
);
