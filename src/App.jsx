import './App.css'
import Home from './pages/home'
import Cadastro from './pages/auth/cadastro'
import { BrowserRouter, Routes, Route } from 'react-router-dom' 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
