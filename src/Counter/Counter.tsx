import React, {ChangeEvent, useState} from 'react';
import classes from './Counter.module.css'

let START_DATA = 0;
let MAX_DATA = 1;

export const Counter: React.FC = () => {
    const [data, setData] = useState<number>(START_DATA)

    const onClickIncrement = () => {
        const newData = data + 1
        setData(newData)
    }
    const onClickReset = () => {
        setData(0)
    }

    const maxValueHandler = (event: ChangeEvent<HTMLInputElement>) =>{
         const valueMaxData = event.currentTarget.value
        MAX_DATA = +valueMaxData
    }
    const startValueHandler = (event: ChangeEvent<HTMLInputElement>) =>{
         const valueStartData = event.currentTarget.value
        setData(+valueStartData)
    }

    return (
        <div>
            <div>
                <div className={classes.count}>
                    <div>start <h1>{data}</h1></div>
                    <div>max <h1>{MAX_DATA}</h1></div>
                </div>
                <button className={classes.button} onClick={onClickIncrement} disabled={data >= MAX_DATA}>Increment</button>
                <button className={classes.button} onClick={onClickReset} disabled={data === START_DATA}>Reset</button>
            </div>
            <input className={classes.input} type={"number"} placeholder={"MAX value"} onChange={maxValueHandler}></input>
            <input className={classes.input} type={"number"} placeholder={"START value"} onChange={startValueHandler}></input>
        </div>
    )
}

