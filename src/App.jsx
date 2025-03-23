import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Nav from './components/Nav.jsx'
import Produtos from './components/Produtos.jsx'
import Footer from './components/Footer.jsx'
import Home from './components/Home.jsx'


function App() {
  return (
    <Router>
      <Nav /> 
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>

      <Footer /> 
    </Router>
  )
}

export default App
