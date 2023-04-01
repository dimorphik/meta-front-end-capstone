const SpecialDish = (props) => {
  return (
    <article>
      <img src={`/assets/images/${props.image}`} className="special-image" alt={props.name} />
      <div className="dish-highlight">
        <div className="dish-details">
          <div className="dish-name">{props.name}</div>
          <div className="dish-price">{props.price}</div>
        </div>
        <p className="dish-description">{props.description}</p>
        <div className="order-delivery-container">
          <div className="order-delivery">Order a delivery</div>
        </div>
      </div>
    </article>
  );
};

export default SpecialDish;
