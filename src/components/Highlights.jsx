const Highlights = () => {
  return (
    <section id="highlights" className="grid">
      <article className="grid-content">
        <div className="heading">
          <h2>Specials</h2>
          <button className="btn-primary">Online Menu</button>
        </div>
        <section className="specials">
          <article>
            <img src="/assets/images/greek salad.jpg" className="special-image" alt="Greek salad" />
            <div className="dish-highlight">
              <div className="dish-details">
                <div className="dish-name">Greek salad</div>
                <div className="dish-price">$12.99</div>
              </div>
              <p className="dish-description">
                The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta
                cheese, garnished with crunchy garlic and rosemary croutons.
              </p>
              <div className="order-delivery-container">
                <div className="order-delivery">Order a delivery</div>
              </div>
            </div>
          </article>
          <article>
            <img
              src="/assets/images/bruschetta_0.jpg.webp"
              className="special-image"
              alt="Bruschetta"
            />
            <div className="dish-highlight">
              <div className="dish-details">
                <div className="dish-name">Bruschetta</div>
                <div className="dish-price">$5.99</div>
              </div>
              <p className="dish-description">
                Our Bruschetta is made from grilled bread that has been smeared with garlic and
                seasoned with salt and olive oil.
              </p>
              <div className="order-delivery-container">
                <div className="order-delivery">Order a delivery</div>
              </div>
            </div>
          </article>
          <article>
            <img
              src="/assets/images/lemon dessert.jpg"
              className="special-image"
              alt="Lemmon Dessert"
            />
            <div className="dish-highlight">
              <div className="dish-details">
                <span className="dish-name">Lemon dessert</span>
                <span className="dish-price">$5.00</span>
              </div>
              <p className="dish-description">
                This comes straight from grandma’s recipe book, every last ingredient has been
                sourced and is as authentic as can be imagined.
              </p>
              <div className="order-delivery-container">
                <div className="order-delivery">Order a delivery</div>
              </div>
            </div>
          </article>
        </section>
      </article>
    </section>
  );
};

export default Highlights;
