import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {CounterActionTypes} from "../services/Counter_Actions";
import {increment,decrement} from "../services/Counter_Reducer";
import {RootState} from "../services/store";

function Counter() {

    const dispatch = useDispatch();

    const { counterNumber} = useSelector((state: RootState) => state.Counter)

    return (
        <div className="App">
            <h1>{counterNumber}</h1>
            <button
                onClick={(e) => {
                    dispatch(increment(2))
                }}>
                Sum + 1
            </button>
            &nbsp;
            <button
                onClick={(e) => {
                    dispatch(decrement(2))
                }}>
                Sum - 1
            </button>
        </div>
    );
}

export default Counter;
