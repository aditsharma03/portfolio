import './App.css'
import Bottombar from './components/Bottombar'
import MainContainer from './components/MainContainer'
import Topbar from './components/Topbar'

function App() {

  return (
    <div className=' font-mono bg-zinc-50 h-[100dvh] w-[100dvw] flex flex-col justify-center'>

    <Topbar />
    <MainContainer />
    <Bottombar />


    </div>
  )
}

export default App
