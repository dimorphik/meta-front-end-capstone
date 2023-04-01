import { Routes, Route, useNavigate } from "react-router-dom";
import { useState, useReducer } from "react";
import { fetchAPI, submitAPI } from "../api";

import Homepage from "./Homepage";
import Bookings from "./Bookings";
import ConfirmedBooking from "./ConfirmedBooking";

const getTimesForDate = (date) => {
  const times = fetchAPI(date);

  return times;
};

const createDateFromString = (dateString) => {
  const dateComponents = dateString.split("-");
  const date = new Date(dateComponents[2], dateComponents[1] - 1, dateComponents[0]);

  return date;
};

const initializeTimes = () => {
  const date = new Date();
  const times = fetchAPI(date);

  return times;
};

const updateTimes = (state, action) => {
  const date = createDateFromString(action.value);
  const times = getTimesForDate(date);

  return times;
};

const getTodaysDate = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  const todaysDate = `${year}-${month}-${day}`;

  return todaysDate;
};

const occasions = ["None", "Birthday", "Anniversary"];

const Main = () => {
  const navigate = useNavigate();

  const onFormSubmitted = (e) => {
    e.preventDefault();
    const success = submitAPI({});

    if (success) {
      navigate("/confirmed-reservation");
    }
  };

  const [availableTimes, dispatchAvailableTimes] = useReducer(updateTimes, initializeTimes());
  const [date, setDate] = useState(getTodaysDate());
  const [time, setTime] = useState(availableTimes[0]);
  const [guests, setGuests] = useState(2);
  const [occasion, setOccasion] = useState("None");

  return (
    <main>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/about" element={<Homepage />}></Route>
        <Route path="/menu" element={<Homepage />}></Route>
        <Route
          path="/reservations"
          element={
            <Bookings
              date={date}
              setDate={setDate}
              time={time}
              setTime={setTime}
              guests={guests}
              setGuests={setGuests}
              occasion={occasion}
              setOccasion={setOccasion}
              availableTimes={availableTimes}
              dispatchAvailableTimes={dispatchAvailableTimes}
              occasions={occasions}
              onSubmit={onFormSubmitted}
            />
          }></Route>
        <Route
          path="/confirmed-reservation"
          element={
            <ConfirmedBooking date={date} time={time} guests={guests} occasion={occasion} />
          }></Route>
        <Route path="/order-online" element={<Homepage />}></Route>
        <Route path="/login" element={<Homepage />}></Route>
      </Routes>
    </main>
  );
};

export default Main;
export { initializeTimes, updateTimes, createDateFromString };
