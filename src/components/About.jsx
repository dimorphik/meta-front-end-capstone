const About = () => {
  return (
    <section id="about" className="grid">
      <div className="grid-content flex-spaced">
        <article>
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
            consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet
            minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
            consequat duis enim velit mollit.
          </p>
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
