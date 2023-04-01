const ConfirmedBooking = (props) => {
  return (
    <section>
      <article>
        <div>Your booking has been confirmed for:</div>
        <div>
          <span>Date:</span>
          {props.date}
        </div>
        <div>
          <span>Time:</span>
          {props.time}
        </div>
        <div>
          <span>Guests:</span>
          {props.guests}
        </div>
        <div>
          <span>Occasion:</span>
          {props.occasion}
        </div>
      </article>
    </section>
  );
};

export default ConfirmedBooking;
