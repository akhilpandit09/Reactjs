import React,{useState, useRef} from 'react'

function useRefHook() {
    const [name, setName] = useState("Demo of useRef Hooks");
    const logo = useRef(null);

    const changeImage = ()=>{
        logo.current.style.transform = "rotate(30deg)";
      }
  return (
    <div>
      <h1>Component of useRef Hook: {name}</h1>
      <img src="http://www.w3.org/2000/svg" alt="" onClick={changeImage} ref={logo} />
    </div>
  )
}

export default useRefHook
