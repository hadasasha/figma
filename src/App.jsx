import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import OneCard from './OneCard/OneCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <OneCard/>
    </>
  )
}

export default App
