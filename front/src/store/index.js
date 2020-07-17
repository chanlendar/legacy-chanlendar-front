import { compose, applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "../reducers";

const configureStore = () => {
    const middlewares = [];
    const enhancer =
        process.env.NODE_ENV === "production"
            ? compose(applyMiddleware(...middlewares))
            : composeWithDevTools(applyMiddleware(...middlewares));

    const store = createStore(rootReducer, enhancer);

    return store;
};

export default configureStore;
