import { compose, applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";

import rootReducer from "../reducers";
import rootSaga from "../sagas";

const configureStore = () => {
	const sagaMiddleware = createSagaMiddleware();
	const middlewares = [sagaMiddleware];
	const enhancer =
		process.env.NODE_ENV === "production"
			? compose(applyMiddleware(...middlewares))
			: composeWithDevTools(applyMiddleware(...middlewares));

	const store = createStore(rootReducer, enhancer);
	store.sagaTask = sagaMiddleware.run(rootSaga);

	return store;
};

export default configureStore;
