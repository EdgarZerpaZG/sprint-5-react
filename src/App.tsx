import { useState } from 'react'
import './App.css'
import styles from './_App.module.scss'
import Header from './components/header/header'
import Manager from './components/manager/manager'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Manager />
      <div className={styles.container}>
        <h1>¡Bienvenido a BookMarks!</h1>
        <h2>Vite + React</h2>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
