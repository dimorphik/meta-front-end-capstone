const Rating = ({ stars }) => {
  const starItems = Array.from(Array(stars));

  return (
    <div className="rating">
      <div>Rating:&nbsp;</div>
      {starItems.map((star, index) => (
        <img key={index} src="/assets/images/wine-glass.png" alt="wine glass" />
      ))}
    </div>
  );
};

export default Rating;
