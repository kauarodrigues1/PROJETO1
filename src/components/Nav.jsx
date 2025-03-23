import { Link } from "react-router-dom";

const Nav =() => {

    return (
  
    <section className="nav">
      <Link to="/home" className="tlink">Home</Link>
       <Link to="/produto" className="tlink">Produto</Link>
       <Link to="/sobre" className="tlink">Sobre</Link>
       <Link to="/footer" className="tlink"></Link>
    </section>
  
    )
  }

  export default Nav