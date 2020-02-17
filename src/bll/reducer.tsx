import counterApi from "../dal/api";
import {Dispatch} from "redux";
import {RootState} from "./store";

export const GET_COUNTER_VALUE = "counter/counterReducer/GET_COUNTER_VALUE";

interface IInitialState {
    value: number
};


const initialState:IInitialState = {
    value:2
};

const counterReducer = (state = initialState, action: any): IInitialState => {
    switch (action.type) {
        case GET_COUNTER_VALUE:
            return {
                ...state,
                value: action.value
            }
    }
    return state;
};

//Action Type
interface IGetCounterValueSuccessActionType {
    type: typeof GET_COUNTER_VALUE,
    value:number
}


 //AC
const getCounterValueSuccess =(value:number): IGetCounterValueSuccessActionType => ({type: GET_COUNTER_VALUE, value});


//TC

export const getCounterValue = () => async (dispatch: Dispatch, getState: () => RootState) => {
    try {
        let value = await counterApi.getValue();
        dispatch(getCounterValueSuccess(value))
    } catch (e) {
        return e
    }
}




export default counterReducer;