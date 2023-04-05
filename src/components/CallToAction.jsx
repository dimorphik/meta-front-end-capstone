import Chicago from "./Chicago";

const CallToAction = () => {
  return (
    <section id="hero" className="grid">
      <article className="grid-content flex-spaced">
        <div className="article-content">
          <Chicago />
          <div className="button-container">
            <button aria-label="On Click" className="btn-primary">
              Reserve a Table
            </button>
          </div>
        </div>
        <div className="image-container">
          <img src="/assets/images/restauranfood.jpg" alt="Hero" />
        </div>
      </article>
    </section>
  );
};

export default CallToAction;
