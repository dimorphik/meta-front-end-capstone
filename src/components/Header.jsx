const Header = () => {
  return (
    <header className="grid">
      <nav className="grid-content flex-spaced">
        <img className="header-logo" src="/assets/images/Logo.svg" alt="Little Lemon Logo"></img>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Menu</a>
          </li>
          <li>
            <a href="#">Reservations</a>
          </li>
          <li>
            <a href="#">Order Online</a>
          </li>
          <li>
            <a href="#">Login</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
