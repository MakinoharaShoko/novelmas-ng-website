import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Tutorial from './pages/Tutorial'
import TutorialDetail from './pages/TutorialDetail'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tutorial" element={<Tutorial />} />
        <Route path="/tutorial/:id" element={<TutorialDetail />} />
      </Routes>
    </>
  )
}

export default App
