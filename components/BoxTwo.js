import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, type } from "../features/counter/boxtwoSlice";

function BoxTwo() {
    const boxtwoValue = useSelector((state) => state.boxtwo.value)
    const dispatch = useDispatch()
    return (
    <div className="box">
        <button className={boxtwoValue == 0 ? 'box__increment':'box__decrement'} onClick={() => dispatch(decrement())}>-</button>
        <input className={boxtwoValue == 0 ? 'box__input':'change'} value={boxtwoValue} onChange={(e) => dispatch(type(e.target.value))} type="number" type="tel"/>
        <button className="box__decrement" onClick={() => dispatch(increment())}>+</button>
    </div>
    )
}

export default BoxTwo
