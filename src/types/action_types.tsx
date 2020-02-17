
//Action Type
import {GET_COUNTER_VALUE, INCREMENT_COUNTER_VALUE} from "../bll/reducer";

export interface IGetCounterValueSuccessActionType {
    type: typeof GET_COUNTER_VALUE,
    value:number
}
export interface IGetIncrementCounterValueSuccessActionType {
    type: typeof INCREMENT_COUNTER_VALUE,
    value:number
}

export type ActionTypes = IGetCounterValueSuccessActionType | IGetIncrementCounterValueSuccessActionType;
