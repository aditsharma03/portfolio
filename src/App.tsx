import { Route, Routes } from 'react-router-dom'
import './App.css'
import Bottombar from './components/Bottombar'
import Home from './components/Home'
import Topbar from './components/Topbar'

function App() {

  return (
    <div className=' font-mono bg-gray-200 h-[100dvh] w-[100dvw] flex flex-col justify-center'>

    <Topbar />
    <Routes>
        <Route path="/" element={ <Home /> } />
    </Routes>
    <Bottombar />


    </div>
  )
}

export default App
