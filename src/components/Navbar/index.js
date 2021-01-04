import { Link, Router } from "react-router-dom";


function Navbar() {
    return (
       <div id="menu" class="container">
        <ul>
            <Link className="similarToLi" to="/">Página Principal</Link>
            <Link className="similarToLi" to="/sobre">Sobre nós</Link>
            <Link className="similarToLi" to="/encomenda">Faça uma Encomenda</Link>
            <Link className="similarToLi" to="/contato">Contato</Link>
        </ul>
    </div>
    );
  }
  
  export default Navbar;