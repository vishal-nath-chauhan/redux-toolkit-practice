import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import {incrementByAmount,increment,decrement} from "./CounterSlice"

function App() {
  const count2=useSelector(state=>state)
console.log(count2)
const count=useSelector(state=>state.counter.value)

const [Amount,setAmount]=useState(count)

console.log(count);
const dispatch = useDispatch()

  return (
    <div className="App">
  <h1>Redux tooolkit</h1>
  <h3 style={{color:"black"}}>value {count}</h3>

  <button onClick={()=>dispatch(increment())} >Add data</button>
  <button onClick={()=>dispatch(decrement())}>subtract data</button>
  <input placeholder="enter amount here" onChange={(e)=>setAmount(Number(e.target.value))} />
  <button onClick={()=>dispatch(incrementByAmount(Amount))} >Submit </button>

    </div>
  );
}

export default App;
