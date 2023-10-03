import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'
import Hooks from './Components/Hooks'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 p-4 rounded-xl text-black mb-4'>Tailwind Test</h1>
      <Card username="Akhil" btnText= "Learn More"/>
      <Card username="Jugal Yadav" btnText="Visit Me"/>
      <Hooks/>
    </>
  )
}

export default App
