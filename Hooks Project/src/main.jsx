import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import UseEffect from './Components/UseEffectHook.jsx'
import UseEffectHook from './Components/UseEffectHook.jsx'
import HookObject from './Components/HookObject.jsx'
import UseMemohooks from './Components/UseMemohooks.jsx'
import UseCallbackHook from './Components/UseCallbackHook.jsx'
import useRefHook from './Components/useRefHook.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App />
    <UseEffectHook/>
    <HookObject/> */}
    {/* <UseMemohooks/>
    <UseCallbackHook/> */}
    <useRefHook/>
  </React.StrictMode>
)
