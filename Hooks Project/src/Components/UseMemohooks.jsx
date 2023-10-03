import React,{useMemo, useState} from 'react'

function UseMemohooks(props) {
    const [counterone, setcounterone]=useState(0);
    const [countertwo, setcountertwo] = useState(0);
    const isEven = useMemo(()=>{
        console.warn(".........");
        let i=0;
        while(i<2000000000) i++;
        return counterone%2===0;
    },[counterone]); //here we pass the dependency named as "counterone" where function is working only in counterone and counterone is slow only not other dependency is slow.

    //countertwo is working properly very fast as compare of countertwo

  return (
    <div>
      <button onClick={(Incrementbtn) =>{
        return setcounterone(counterone+1)
      }}>Increment-{counterone}</button>

      <span>{isEven?"Even":"odd"}</span>

      <button onClick={(decrementbtn)=>{return setcountertwo (countertwo-1)}}>Decrement-{countertwo}</button>
    </div>
  )
}

export default UseMemohooks
