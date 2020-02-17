import counterApi from "../dal/api";
import {Dispatch} from "redux";
import {RootState} from "./store";
import {
    ActionTypes,
    IGetCounterValueSuccessActionType,
    IGetIncrementCounterValueSuccessActionType
} from "../types/action_types";

export const GET_COUNTER_VALUE = "counter/counterReducer/GET_COUNTER_VALUE";
export const INCREMENT_COUNTER_VALUE = "counter/counterReducer/INCREMENT_COUNTER_VALUE";

interface IInitialState {
    value: number
};


const initialState: IInitialState = {
    value: 2
};

const counterReducer = (state = initialState, action: ActionTypes): IInitialState => {
    switch (action.type) {
        case INCREMENT_COUNTER_VALUE:
        case GET_COUNTER_VALUE:
            return {
                ...state,
                value: action.value
            }
    }
    return state
};

//AC
const getCounterValueSuccess =(value:number): IGetCounterValueSuccessActionType => ({type: GET_COUNTER_VALUE, value});
const incrementCounterValueSuccess =(value:number): IGetIncrementCounterValueSuccessActionType => ({type: INCREMENT_COUNTER_VALUE,value});

//TC

export const getCounterValue = () => async (dispatch: Dispatch, getState: () => RootState) => {
    try {
        let value = await counterApi.getValue();
        dispatch(getCounterValueSuccess(value))
    } catch (e) {
        return e
    }
}
export const incrementCounterValue = () => async (dispatch: Dispatch, getState: () => RootState) => {
    try {
        const counterValue = getState().counter.value;
        let value = await counterApi.incrementValue(counterValue + 1);
        dispatch(incrementCounterValueSuccess(value))
    } catch (e) {
        return e
    }
}




export default counterReducer;