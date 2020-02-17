
interface IInitialState {
    value: number
};

const initialState:IInitialState = {
    value:1
};

 const counterReducer  = (state= initialState,action:any):IInitialState =>{
    return state;
};



export default counterReducer;