import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1><ul>Let's Login</ul></h1>
      <input type='text' placeholder='Enter name'/>
      <br />
      <input type='number' placeholder='Enter age'/>
      <br />
      <input type='password' placeholder='Enter password'/>
      <input type='checkbox' placeholder='check'/>
      
      
    </>
  )
}

export default App
