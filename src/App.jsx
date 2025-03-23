import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Nav from './components/Nav.jsx'
import Produtos from './components/Produtos.jsx'
import Footer from './components/Footer.jsx'
import Home from './components/Home.jsx'

function App() {

  return (
    <Router>
      <Nav/>
      <Produtos/>
      <Home/>
      <Footer/>
      
    </Router>
  )
}

export default App
