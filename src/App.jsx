import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Nav from './components/Nav.jsx'
import Produtos from './components/Produtos.jsx'
import Footer from './components/Footer.jsx'
import Home from './components/Home.jsx'
import Sobre from './components/Sobre.jsx'

function App() {
  return (

    <Router>
      <Nav /> 
      
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/produto" element={<Produtos />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>

      <Footer /> 
    </Router>
  )
}

export default App
