import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import Form from './Components/Form' ;
import Card from './Components/Card';
import './App.css'

function App() {
  const [count, setCount] = useState(false)

  return (
    <>
    <div className="App">
      <h1>Carga de Paises</h1>
      <form>{Form}</form>
      <Card />
    </div>

      
    </>
  )
}

export default App
