import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Nav from './components/Nav.jsx'
import Produtos from './components/Produtos.jsx'
import Footer from './components/Footer.jsx'

function App() {

  return (
    <Router>
      <Nav/>
      <Produtos/>
      <Footer/>
      
    </Router>
  )
}

export default App
