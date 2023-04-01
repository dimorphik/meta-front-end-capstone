import Chicago from "./Chicago";

const About = () => {
  return (
    <section id="about" className="grid">
      <div className="grid-content flex-spaced">
        <article>
          <Chicago />
        </article>
        <div className="image-container">
          <img className="lower-image" src="/assets/images/restaurant.jpg" alt="Lower" />
          <img className="upper-image" src="/assets/images/Mario and Adrian b.jpg" alt="Upper" />
        </div>
      </div>
    </section>
  );
};

export default About;
