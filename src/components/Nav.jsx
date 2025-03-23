import { Link } from "react-router-dom";

const Nav =() => {

    return (
  
    <section className="nav">
      <div style={{ display: "flex", gap: '16px'}}>
      <Link to="/home" className="tlink">Home</Link>
       <Link to="/produto" className="tlink">Produto</Link>
       <Link to="/sobre" className="tlink">Sobre</Link>
       <Link to="/footer" className="tlink"></Link>
       </div>
    </section>
  
    )
  }

  export default Nav