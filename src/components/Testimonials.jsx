const Testimonials = () => {
  return (
    <section id="testimonials" className="grid">
      <h2>Testimonials</h2>
      <ul className="grid-content flex-spaced">
        <li>
          <div className="rating">Rating</div>
          <div className="reviewer-details">
            <img src="/assets/images/thumbnail5.webp" alt="thumbnail" />
            <span>Debbie Culling</span>
          </div>
          <div className="review-content">
            "Ay, this-a spaghetti alla carbonara, it'sa so good, it make-a my mamma cry!"
          </div>
        </li>
        <li>
          <div className="rating">Rating</div>
          <div className="reviewer-details">
            <img src="/assets/images/thumbnail2.webp" alt="thumbnail" />
            <span>Doug Lemawn</span>
          </div>
          <div className="review-content">
            “The mozzarella isa like a fluffy cloud and the basil isa like a spicy rainbow.
            Fantastico!"
          </div>
        </li>
        <li>
          <div className="rating">Rating</div>
          <div className="reviewer-details">
            <img src="/assets/images/thumbnail3.webp" alt="thumbnail" />
            <span>Gretchen Sklarsky</span>
          </div>
          <div className="review-content">
            "The bruschetta, it'sa like a party in my mouth and everybody gonna be invited!"
          </div>
        </li>
        <li>
          <div className="rating">Rating</div>
          <div className="reviewer-details">
            <img src="/assets/images/thumbnail4.webp" alt="thumbnail" />
            <span>Josh Rossman</span>
          </div>
          <div className="review-content">
            "The cannoli, it'sa like a sweeta little bambino ina my hand!"
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Testimonials;
