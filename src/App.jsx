import { useState } from 'react'
import './App.css'
import Header from './Header'
import Input from './Input'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header />
     <Input />
    </>
  )
}

export default App
