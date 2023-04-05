import BookingForm from "./BookingForm";

const Booking = (props) => {
  return (
    <section id="booking">
      <BookingForm
        todaysDate={props.todaysDate}
        date={props.date}
        setDate={props.setDate}
        time={props.time}
        setTime={props.setTime}
        guests={props.guests}
        setGuests={props.setGuests}
        occasion={props.occasion}
        setOccasion={props.setOccasion}
        availableTimes={props.availableTimes}
        dispatchAvailableTimes={props.dispatchAvailableTimes}
        occasions={props.occasions}
        onSubmit={props.onSubmit}
      />
    </section>
  );
};

export default Booking;
