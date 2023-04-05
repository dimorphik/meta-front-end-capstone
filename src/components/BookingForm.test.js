import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm";
import { isFormValid } from "./BookingForm";

const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
const occasions = ["None", "Birthday", "Anniversary"];

test("Renders the BookingForm heading", () => {
  render(<BookingForm availableTimes={availableTimes} occasions={occasions} />);
  const headingElement = screen.getByText("Number of guests");
  expect(headingElement).toBeInTheDocument();
});

test("booking form can be submitted", () => {
  const todaysDate = "2023-04-10";
  const date = "2023-04-10";
  const time = "17:00";
  const guests = 2;
  const occasion = "None";
  const handleSubmit = jest.fn((e) => e.preventDefault());
  render(
    <BookingForm
      todaysDate={todaysDate}
      date={date}
      time={time}
      guests={guests}
      occasion={occasion}
      availableTimes={availableTimes}
      occasions={occasions}
      onSubmit={handleSubmit}
    />
  );
  const submitButton = screen.getByText("Make Your reservation");
  fireEvent.click(submitButton);
  expect(handleSubmit).toHaveBeenCalled();
});

test("Booking form can be submitted if all data is valid", () => {
  const props = {
    todaysDate: "2023-04-10",
    date: "2023-04-10",
    time: "17:00",
    availableTimes: ["17:00", "18:00"],
    guests: 2,
  };
  const result = isFormValid(props);
  expect(result).toBe(true);
});

test("Booking form cannot be submitted if today's date is not supplied", () => {
  const props = {
    date: "2023-04-10",
    time: "17:00",
    availableTimes: ["17:00", "18:00"],
    guests: 2,
  };
  const result = isFormValid(props);
  expect(result).toBe(false);
});

test("Booking form cannot be submitted if the date field is not supplied", () => {
  const props = {
    todaysDate: "2023-04-10",
    time: "17:00",
    availableTimes: ["17:00", "18:00"],
    guests: 2,
  };
  const result = isFormValid(props);
  expect(result).toBe(false);
});

test("Booking form cannot be submitted if the time field is not supplied", () => {
  const props = {
    todaysDate: "2023-04-10",
    date: "2023-04-10",
    availableTimes: ["17:00", "18:00"],
    guests: 2,
  };
  const result = isFormValid(props);
  expect(result).toBe(false);
});

test("Booking form cannot be submitted if availableTimes is an empty array", () => {
  const props = {
    todaysDate: "2023-04-10",
    date: "2023-04-10",
    availableTimes: [],
    guests: 2,
  };
  const result = isFormValid(props);
  expect(result).toBe(false);
});

test("Booking form cannot be submitted if availableTimes is not supplied", () => {
  const props = {
    todaysDate: "2023-04-10",
    date: "2023-04-10",
    guests: 2,
  };
  const result = isFormValid(props);
  expect(result).toBe(false);
});

test("Booking form cannot be submitted if the guests field is not supplied", () => {
  const props = {
    todaysDate: "2023-04-10",
    date: "2023-04-10",
    availableTimes: ["17:00", "18:00"],
  };
  const result = isFormValid(props);
  expect(result).toBe(false);
});
