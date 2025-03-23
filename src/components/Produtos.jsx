import { Link } from "react-router-dom";

const Produtos =() => {

    return(
    <section>
      <div style={{ display: 'flex', gap: '16px' }}>
        <div>
          <h3>Jamal</h3>
          <img height={300} width={300} src="./img1.jpg" alt="Jamal" />
        </div>

        <div>
          <h3>Lebron Shirt</h3>
          <img height={300} width={300} src="./lebron.png" alt="Lebron" />
        </div>

        <div>
          <h3>Poatan Shirt</h3>
          <img height={300} width={300} src="./poatan.png" alt="Poatan" />
        </div>

        <div>
          <h3>Detran Shirt</h3>
          <img height={300} width={300} src="./detran.png" alt="Detran" />
        </div>
      </div>
        
    </section>
    )
}

export default Produtos