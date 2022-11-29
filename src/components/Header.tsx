import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Logo from "../../public/logo.png";

export function Header() {
  return (
    <header className="fHeader">
      <Link to="/">
        <img className="logo" src={Logo} alt="" />
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/premium">Premium</Link>
          </li>
          <li>
            <Link to="/suporte">Suporte</Link>
          </li>
          <li>
            <Link to="/baixar">Baixar</Link>
          </li>
          <div style={{ cursor: "default" }}>|</div>
          <li>
            <Link to="/signup">Increver-se</Link>
          </li>
          <li>
            <Link to="/login">Entrar</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
