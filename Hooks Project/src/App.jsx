import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(5)
  // let counter = 12;
  const addValue = () =>{
    if (counter < 20){
      setCounter(counter + 1);
    }
  }
  const minusValue = () =>{
    if(counter > 0){
      setCounter(counter - 1)
    }
  }
  return (
    <>
    <h1>React development- Hooks project</h1>
    <h2>Counter value: {counter}</h2>
    <button onClick={addValue}>Add value: {counter}</button><br /><br />
    <button onClick={minusValue}>Remove value: {counter}</button>
    </>
  )
}

export default App;


