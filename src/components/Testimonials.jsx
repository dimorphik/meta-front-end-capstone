const Testimonials = () => {
  return (
    <section id="testimonials" className="grid">
      <h2>Testimonials</h2>
      <ul className="grid-content flex-spaced">
        <li>
          <div className="rating">Rating</div>
          <div className="reviewer-details">
            <img src="/assets/images/thumbnail5.webp" alt="thumbnail" />
            <span>Lucia Greco</span>
          </div>
          <div className="review-content">
            "Ay, this-a spaghetti alla carbonara, it'sa so good, it make-a my mamma cry!"
          </div>
        </li>
        <li>
          <div className="rating">Rating</div>
          <div className="reviewer-details">
            <img src="/assets/images/thumbnail2.webp" alt="thumbnail" />
            <span>Carmine Ferraro</span>
          </div>
          <div className="review-content">
            “The mozzarella isa like a fluffy cloud and the basil isa like a spicy rainbow!"
          </div>
        </li>
        <li>
          <div className="rating">Rating</div>
          <div className="reviewer-details">
            <img src="/assets/images/thumbnail3.webp" alt="thumbnail" />
            <span>Antonella Lombardi</span>
          </div>
          <div className="review-content">
            "The bruschetta, it'sa like a party ina my mouth and everybody gonna be invited!"
          </div>
        </li>
        <li>
          <div className="rating">Rating</div>
          <div className="reviewer-details">
            <img src="/assets/images/thumbnail4.webp" alt="thumbnail" />
            <span>Vincenzo DeLuca</span>
          </div>
          <div className="review-content">
            "Disa cannoli, it'sa like a sweeta little bambino ina my hand!"
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Testimonials;
