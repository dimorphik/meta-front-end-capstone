import { useNavigate } from "react-router-dom";

const ConfirmedBooking = (props) => {
  const navigate = useNavigate();
  const makeReservation = (e) => {
    navigate("/reservations");
  };

  return (
    <section id="booking-confirmed">
      <h2>Your reservation is confirmed.</h2>
      <article>
        <p>We can't wait to see you on:</p>
        <div>
          <span>Date:&nbsp;</span>
          {props.reservationData.date}
        </div>
        <div>
          <span>Time:&nbsp;</span>
          {props.reservationData.time}
        </div>
        <div>
          <span>Guests:&nbsp;</span>
          {props.reservationData.guests}
        </div>
        {props.reservationData.occasion && props.reservationData.occasion !== "None" && (
          <div>
            <span>Occasion:&nbsp;</span>
            {props.reservationData.occasion}
          </div>
        )}
      </article>
      <h3>Bring your appetite!</h3>
      <button onClick={makeReservation}>Make another reservation</button>
    </section>
  );
};

export default ConfirmedBooking;
