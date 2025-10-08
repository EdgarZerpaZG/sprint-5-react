import './App.css'
import Header from './components/header/header'
import Manager from './components/managerSection/manager'
import Features from './components/featuresSection/features'
import Extension from './components/extensionSection/extension'
import Questions from './components/questionsSection/questions'
import Footer from './components/footer/footer'

export default function App() {
  return (
    <>
      <main>
        <Header />
        <Manager />
        <Features />
        <Extension />
        <Questions />
        <Footer />
      </main>
    </>
  )
}
