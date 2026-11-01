import { useState } from 'react'
import './App.css'
import Formulario from './components/Formulario'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='contenido-grid'>
      {/*logo img*/}
      {/*Formulario*/}
      <Formulario
      count={count}
      setCount={setCount}
      />
      {/*mensaje de error*/}
      {/*spiner*/}
      {/*cotizacion*/}
    </div>
  )
}

export default App
