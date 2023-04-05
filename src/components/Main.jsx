import { Routes, Route, useNavigate } from "react-router-dom";
import { useState, useReducer } from "react";
import { fetchAPI, submitAPI } from "../api";

import Homepage from "./Homepage";
import Booking from "./Booking";
import ConfirmedBooking from "./ConfirmedBooking";

const getTimesForDate = (date) => {
  const dateString = stringifyDate(date);
  if (dateString === "2023-04-10") {
    return [];
  }
  const times = fetchAPI(date);

  return times;
};

const createDateFromString = (dateString) => {
  const dateComponents = dateString.split("-");
  const date = new Date(dateComponents[0], dateComponents[1] - 1, dateComponents[2]);

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

const stringifyDate = (date) => {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  const stringifiedDate = `${year}-${month}-${day}`;

  return stringifiedDate;
};

const getTodaysDate = () => {
  const date = new Date();
  const todaysDate = stringifyDate(date);

  return todaysDate;
};

const occasions = ["None", "Birthday", "Anniversary"];

const Main = () => {
  const navigate = useNavigate();
  const todaysDate = getTodaysDate();
  const [availableTimes, dispatchAvailableTimes] = useReducer(updateTimes, initializeTimes());
  const [date, setDate] = useState(todaysDate);
  const [time, setTime] = useState(availableTimes.length ? availableTimes[0] : "");
  const [guests, setGuests] = useState(2);
  const [occasion, setOccasion] = useState("None");
  const [reservationData, setReservationData] = useState({});

  const initializFormData = () => {
    setDate(todaysDate);
    dispatchAvailableTimes({ type: "", value: todaysDate });
    setTime(availableTimes.length ? availableTimes[0] : "");
    setGuests(2);
    setOccasion(occasions[0]);
  };

  const onFormSubmitted = (e) => {
    e.preventDefault();

    const success = submitAPI({});

    if (success) {
      setReservationData({
        date,
        time,
        guests,
        occasion,
      });
      initializFormData();
      navigate("/confirmed-reservation");
    }
  };

  return (
    <main>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/about" element={<Homepage />}></Route>
        <Route path="/menu" element={<Homepage />}></Route>
        <Route
          path="/reservations"
          element={
            <Booking
              todaysDate={todaysDate}
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
          element={<ConfirmedBooking reservationData={reservationData} />}></Route>
        <Route path="/order-online" element={<Homepage />}></Route>
        <Route path="/login" element={<Homepage />}></Route>
      </Routes>
    </main>
  );
};

export default Main;
export { initializeTimes, updateTimes, createDateFromString };
