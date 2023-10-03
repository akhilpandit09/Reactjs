import { useState } from "react";

function App() {
  // const [count, setCount] = useState(0)
  const [color, setcolor] = useState("grey");
  function greenColor(){
    setcolor('rgb(22 163 74)');
  }
  return (
    <div className="w-full h-screen duration-200"
      style={{backgroundColor: color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button 
            onClick={() => setcolor("red")} 
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
            style={{backgroundColor:"red"}}>Red
            </button>

            <button 
            onClick={greenColor} 
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-green-600">Green
            </button>

            <button 
            onClick={() => setcolor("purple")} 
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
            style={{backgroundColor:"purple"}}>purple
            </button>

            <button 
            onClick={() => setcolor("yellow")} 
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg" 
            style={{backgroundColor:"yellow"}}>yellow
            </button>

            <button 
            onClick={() => setcolor("black")} 
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
            style={{backgroundColor:"black"}}>Black
            </button>
          </div>
        </div>
    </div>
  );
}

export default App;
