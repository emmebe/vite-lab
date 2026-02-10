import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { FaReact, FaRocket, FaHeart, FaCode } from 'react-icons/fa'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <FaHeart className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <FaRocket className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Emma Learns Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          You've clicked {count} times
        </button>
        <p>
          I edited the header, subheaders, and svgs.
        </p>
      </div>
      <p className="read-the-docs">
        I learned how to edit Vite + React 
      </p>
    </>
  )
}

export default App
