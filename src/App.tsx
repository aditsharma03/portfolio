import { Route, Routes } from 'react-router-dom'
import './App.css'
import Bottombar from './components/Bottombar'
import Home from './components/Home'
import Topbar from './components/Topbar'
import About from './components/About'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Tech from './components/Tech'
import Art from './components/Art'

function App() {

  return (
    <div className=' font-mono bg-neutral-100 h-[100dvh] w-[100dvw] flex flex-col justify-center'>

    <div className='justify-start'><Topbar /></div>
    
    <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="/contact" element={ <Contact /> } />
        <Route path="/projects" element={ <Projects /> } />
        <Route path="/projects/tech" element={ <Tech /> } />
        <Route path="/projects/art" element={ <Art /> } />
    </Routes>

    <div className='justify-end'><Bottombar /></div>
    


    </div>
  )
}

export default App
