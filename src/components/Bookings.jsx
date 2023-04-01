import { useState } from "react";

import BookingForm from "./BookingForm";

const getTodaysDate = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  const todaysDate = `${year}-${month}-${day}`;

  return todaysDate;
};

const occasions = ["None", "Birthday", "Anniversary"];

const Bookings = (props) => {
  const [date, setDate] = useState(getTodaysDate());
  const [time, setTime] = useState(props.availableTimes[0]);
  const [guests, setGuests] = useState(2);
  const [occasion, setOccasion] = useState("None");

  return (
    <BookingForm
      date={date}
      setDate={setDate}
      time={time}
      setTime={setTime}
      guests={guests}
      setGuests={setGuests}
      occasion={occasion}
      setOccasion={setOccasion}
      availableTimes={props.availableTimes}
      dispatchAvailableTimes={props.dispatchAvailableTimes}
      occasions={occasions}
      onSubmit={props.onSubmit}
    />
  );
};

export default Bookings;
