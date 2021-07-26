import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, type } from "../features/counter/boxthreeSlice";

function BoxThree() {
    const boxthreeValue = useSelector((state) => state.boxthree.value)
    const dispatch = useDispatch()
    return (
    <div className="box">
        <button className={boxthreeValue == 0 ? 'box__increment':'box__decrement'} onClick={() => dispatch(decrement())}>-</button>
        <input className={boxthreeValue == 0 ? 'box__input':'change'} value={boxthreeValue} onChange={(e) => dispatch(type(e.target.value))} type="number" type="tel"/>
        <button className="box__decrement" onClick={() => dispatch(increment())}>+</button>
    </div>
    )
}

export default BoxThree
