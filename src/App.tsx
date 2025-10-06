import { useState } from 'react'
import './App.css'
import styles from './_App.module.scss'
import Header from './components/header/header'
import Manager from './components/managerSection/manager'
import Features from './components/featuresSection/features'
import Extension from './components/extensionSection/extension'
import Questions from './components/questionsSection/questions'
import Footer from './components/footer/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Manager />
      <Features />
      <Extension />
      <Questions />
      <Footer />
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
