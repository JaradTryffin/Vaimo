import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, type } from "../features/counter/counterSlice"

function TextBoxCount() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    return (
        <div className="box">
            <button className={count == 0 ? 'box__increment':'box__decrement'}  onClick={() => dispatch(decrement())}>-</button>
            <input min='0' className={count == 0 ? 'box__input':'change'} value={count}  onChange={(e) => dispatch(type(e.target.value))} type="number" type="tel"/>
            <button className="box__decrement" onClick={() => dispatch(increment())}>+</button>
        </div>
    )
}
// box__input change
export default TextBoxCount
