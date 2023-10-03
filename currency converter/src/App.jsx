import { useState } from 'react'
import './App.css'
import { Input } from 'postcss'
import InputBox from './components/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  // const [count, setCount] = useState(0)
const [amount, setAmount] = useState(0);
const [from, setFrom] = useState("usd");
const [to, setTo] = useState('inr');
const [convertAmount, setConvertAmount] = useState(0);

const currencyInfo = useState(from);
const option = Object.keys(currencyInfo);

const swap = ()=>{
  setFrom((prev)=>{return to});
  setTo((prev)=>{return from});
  setConvertAmount((prev)=>{return amount});
  setAmount((prev)=>{return convertAmount})
}
const convert = () =>{
  setConvertAmount(amount * currencyInfo[to])
}

  return (
    <>
     {/* <h1 className='text-3xl bg-orange-500'>Currnecy Converter App</h1> */}
     <InputBox/>
     {/* <useCurrencyInfo/> */}
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('${BackgroundImage}')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                           
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert 
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default App
