import React, {useEffect} from 'react'
import { useState } from 'react'

function UseEffectHook() {
    const [name, setName] =useState("Akhil");
    const [counter, setCounter] =useState(0);
    const [counter1, setCounter1] = useState(80);

    const nameHandler =()=>{
        setName("Akhileshwar kumar pandit")
    }
    const increment = ()=>{
      for (let i=0; i<10; i++){
        setCounter((prevCount) => prevCount + 1);
      }
    }
    const decrement = ()=>{
        setCounter1( (prevCount)=> prevCount-1);
    }
    useEffect(()=>{
        console.log("I am using UseEffect hooks");
    }, [counter, counter1])
    // 
    
  return (
    <>
    <br />
    <br />
    {name} 
      <button onClick={nameHandler}>Click me</button>
      <button onClick={increment}>Increment - </button>{counter}
      <button onClick={decrement}>Decrement - </button>{counter1}
    </>
  )
}

export default UseEffectHook
