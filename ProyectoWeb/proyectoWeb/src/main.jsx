import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App'
import './index.css'
import FirstApp from './FirstApp'
import { ComponentApp } from './ComponentApp'

function App() {
  return <h1> Holis </h1>
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/*<FirstApp value={0}/>*/}
    <ComponentApp/>
  </React.StrictMode>,
)
