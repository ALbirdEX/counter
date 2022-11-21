import React from 'react';
import './App.css';
import classes from './Counter/Counter.module.css'
import {Counter} from "./Counter/Counter";

function App() {
    return (
        <div className="App">
            <h1 className={classes.count}>My сounter</h1>
            <div><Counter/></div>
        </div>
    );
}

export default App;
