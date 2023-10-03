import React, { useCallback, useState } from "react";
import Child from "./Child";

function UseCallbackHook() {
  const [counterone, setcounterone] = useState(0);
  const [countertwo, setcountertwo] = useState("");
  const Incrementbtn = ()=>{
    return setcounterone(counterone+1);
  }
  const fun = useCallback(() => {
    console.log("Hello i am a function");
  }, countertwo);

  return (
    <div>
      <Child countertwo={countertwo} fun/>
      <button
        onClick={Incrementbtn}>
        Increment-{counterone}
      </button>
    </div>
  );
}

export default UseCallbackHook;
