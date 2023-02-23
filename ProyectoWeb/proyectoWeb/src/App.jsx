import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import SecondsToTimeConverter from './SecondsToTimeConverter';
import SameNumbers from './SameNumbers';
import Greeting from './Greeting'


function App() {

  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>
        Challenge
      </h1>
      {/*<div>
        <h2>Ingrese tres números:</h2>
        <SameNumbers />
         </div>*/}
         
    </div>

  )
}

export default App
