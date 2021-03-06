import React, {useEffect} from "react";
import {connect} from "react-redux";
import {RootState} from "./bll/store";
import {getCounterValue,incrementCounterValue} from "./bll/reducer";


interface IMapStateProps {
    value: number
};

interface IMapDispatchProps {
    getCounterValue: () => void,
    incrementCounterValue:()=>void
};

type Props = IMapStateProps & IMapDispatchProps;

const Counter = (props: Props) => {
    useEffect(() => {
        props.getCounterValue()
    }, []);

    return (
        <div className="counter">
            <h2>Counter </h2>
            <h3> Value: {props.value} </h3>

            <div className="button">
                <button onClick={()=> {props.incrementCounterValue()}}>Increment</button>
            </div>

        </div>
    )
};


const mapStateToProps = (state: RootState):IMapStateProps => {
    return {
        value: state.counter.value
    }
};

export default connect(mapStateToProps,{getCounterValue,incrementCounterValue})(Counter);