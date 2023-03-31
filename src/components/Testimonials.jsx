import Review from "./Review";

const testimonialData = [
  {
    rating: 4,
    image: "thumbnail5.webp",
    name: "Lucia Greco",
    review: "Ay, this-a spaghetti alla carbonara, it'sa so good, it make-a my mamma cry!",
  },
  {
    rating: 5,
    image: "thumbnail2.webp",
    name: "Carmine Ferraro",
    review: "The mozzarella isa like a fluffy cloud and the basil isa like a spicy rainbow!",
  },
  {
    rating: 5,
    image: "thumbnail3.webp",
    name: "Antonella Lombardi",
    review: "The bruschetta, it'sa like a party ina my mouth and everybody gonna be invited!",
  },
  {
    rating: 5,
    image: "thumbnail4.webp",
    name: "Vincenzo DeLuca",
    review: "Disa cannoli, it'sa like a sweeta little bambino ina my hand!",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="grid">
      <h2>Testimonials</h2>
      <ul className="grid-content flex-spaced">
        {testimonialData.map((testimonial) => (
          <Review
            key={testimonial.name}
            rating={testimonial.rating}
            image={testimonial.image}
            name={testimonial.name}
            review={testimonial.review}
          />
        ))}
      </ul>
    </section>
  );
};

export default Testimonials;
