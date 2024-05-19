import  {useState } from "react";
import "./styles.css"
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Link to="/" className="title">
        Estacionamento
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/">cadastro</NavLink>
        </li>
        <li>
          <NavLink to="/vagasCadastradas">Vagas Cadastradas</NavLink>
        </li>
        <li>
          <NavLink to="/vagasDisponiveis">Vagas Disponíves</NavLink>
        </li>
      </ul>
    </nav>
  );
};
