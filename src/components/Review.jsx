import Rating from "./Rating";

const Review = (props) => {
  return (
    <li>
      <Rating stars={props.rating} />
      <div className="reviewer-details">
        <img src={`/assets/images/${props.image}`} alt="thumbnail" />
        <span>{props.name}</span>
      </div>
      <div className="review-content">{props.review}</div>
    </li>
  );
};

export default Review;
