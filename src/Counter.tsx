import React, {useEffect} from "react";
import {connect} from "react-redux";
import {RootState} from "./bll/store";


interface IMapStateProps {
    value: number
};

interface IMapDispatchProps {
    getCounterValue: () => void
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
                <button>Increment</button>
            </div>

        </div>
    )
};


const mapStateToProps = (state: RootState) => {
    return {
        value: state.counter.value
    }
};

export default connect(mapStateToProps,{getCounterValue})(Counter);