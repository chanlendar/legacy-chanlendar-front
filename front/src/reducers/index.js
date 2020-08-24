import { combineReducers } from "redux";

import topic from "./topic";
import user from "./user";

const rootReducer = combineReducers({topic, user});

export default rootReducer;
