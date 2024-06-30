import { Route, Routes } from 'react-router-dom'
import './App.css'
import Bottombar from './components/Bottombar'
import Home from './components/Home'
import Topbar from './components/Topbar'
import About from './components/About'
import Contact from './components/Contact'
import Projects from './components/Projects'

function App() {

  return (
    <div className=' font-mono bg-zinc-200 h-[100dvh] w-[100dvw] flex flex-col justify-center'>

    <Topbar />
    <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="/contact" element={ <Contact /> } />
        <Route path="/projects" element={ <Projects /> } />
    </Routes>
    <Bottombar />


    </div>
  )
}

export default App
