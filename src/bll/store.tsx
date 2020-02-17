import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleWare from "redux-thunk";
import counterReducer from "./reducer";

const rootReducer = combineReducers({
    counter: counterReducer
});

export type RootState = ReturnType<typeof rootReducer>



const store = createStore(rootReducer, applyMiddleware (thunkMiddleWare));
export default store;

