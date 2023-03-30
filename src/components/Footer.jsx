const Footer = () => {
  return (
    <footer className="grid">
      <div className="grid-content flex-spaced">
        <img className="footer-logo" src="/assets/images/Asset 20@4x.png" alt="Little Lemon Logo" />
        <section>
          <p className="footer-section-title">Doormat Navigation</p>
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
        </section>
        <section>
          <p className="footer-section-title">Contact</p>
          <ul>
            <li>
              <a href="#">Address</a>
            </li>
            <li>
              <a href="#">Phone #</a>
            </li>
            <li>
              <a href="#">Email</a>
            </li>
          </ul>
        </section>
        <section>
          <p className="footer-section-title">Social Media Links</p>
          <ul>
            <li>
              <a href="#">Tweeter</a>
            </li>
            <li>
              <a href="#">Faceboop</a>
            </li>
            <li>
              <a href="#">Instablam</a>
            </li>
          </ul>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
