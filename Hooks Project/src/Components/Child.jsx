import React,{memo} from 'react'

function Child(props) {
    const {countertwo, setCountertwo}=props;
    console.log("Render each time")
  return (
    <div>
      <h1>Child Components</h1>
    </div>
  )
}

export default memo(Child)
