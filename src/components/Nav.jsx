import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <header className="grid">
      <nav className="grid-content flex-spaced">
        <img className="header-logo" src="/assets/images/Logo.svg" alt="Little Lemon Logo"></img>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/reservations">Reservations</Link>
          </li>
          <li>
            <Link to="/order-online">Order Online</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
