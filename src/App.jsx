import './App.css'
import Home from './pages/home'
import Servicos from './pages/home/servicos'
import Login from './pages/auth/login'
import Cadastro from './pages/auth/cadastro'
import { BrowserRouter, Routes, Route } from 'react-router-dom' 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/servicos" element={<Servicos />} />



      </Routes>
    </BrowserRouter>
  )
}

export default App
