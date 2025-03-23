import { Link } from "react-router-dom";

const Nav =() => {

    return (
  
    <section className="nav">
      <div style={{ display: "flex", gap: '16px', backgroundColor: "grey", padding: '15px', }}>
       <Link style={{color:"black"}}  to="/home" className="tlink">Home</Link>
       <Link style={{color:"blue"}} to="/produto" className="tlink">Produto</Link>
       <Link style={{color:"white"}}to="/sobre" className="tlink">Sobre</Link>
       <Link to="/footer" className="tlink"></Link>
       </div>
    </section>
  
    )
  }

  export default Nav