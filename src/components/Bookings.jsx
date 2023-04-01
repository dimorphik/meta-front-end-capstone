import BookingForm from "./BookingForm";

const Bookings = (props) => {
  return (
    <BookingForm
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
  );
};

export default Bookings;
