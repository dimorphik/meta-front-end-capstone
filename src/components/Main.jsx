import { Routes, Route } from "react-router-dom";
import { useReducer } from "react";

import Homepage from "./Homepage";
import Bookings from "./Bookings";

const initializeTimes = () => {
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};
const updateTimes = (state, action) => {
  const stateCopy = state.concat();

  return stateCopy;
};

const onFormSubmitted = () => {};

const Main = () => {
  const [availableTimes, dispatchAvailableTimes] = useReducer(updateTimes, initializeTimes());

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
              availableTimes={availableTimes}
              dispatchAvailableTimes={dispatchAvailableTimes}
              onSubmit={onFormSubmitted}
            />
          }></Route>
        <Route path="/order-online" element={<Homepage />}></Route>
        <Route path="/login" element={<Homepage />}></Route>
      </Routes>
    </main>
  );
};

export default Main;
export { initializeTimes, updateTimes };
