import HighlightedDish from "./HighlightedDish";

const dishes = [
  {
    name: "Greek salad",
    price: "$12.99",
    image: "greek salad.jpg",
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
  },
  {
    name: "Bruschetta",
    price: "$5.99",
    image: "bruschetta_0.jpg.webp",
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
  },
  {
    name: "Lemon Dessert",
    price: "$5.00",
    image: "lemon dessert.jpg",
    description:
      "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
  },
];

const Highlights = () => {
  return (
    <section id="highlights" className="grid">
      <article className="grid-content">
        <div className="heading">
          <h2>Specials</h2>
          <button className="btn-primary">Online Menu</button>
        </div>
        <section className="specials">
          {dishes.map((dish) => (
            <HighlightedDish
              key={dish.name}
              name={dish.name}
              price={dish.price}
              image={dish.image}
              description={dish.description}
            />
          ))}
        </section>
      </article>
    </section>
  );
};

export default Highlights;
