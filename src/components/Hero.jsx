const Hero = () => {
  return (
    <section id="hero" className="grid">
      <article className="grid-content flex-spaced">
        <div className="article-content">
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
          <p>
            We are a family owned Mediterranean restaurant, focused on traditional recipes served
            with a modern twist.
          </p>
          <div className="button-container">
            <button className="btn-primary">Reserve a Table</button>
          </div>
        </div>
        <div className="image-container">
          <img src="/assets/images/restauranfood.jpg" alt="Hero" />
        </div>
      </article>
    </section>
  );
};

export default Hero;
