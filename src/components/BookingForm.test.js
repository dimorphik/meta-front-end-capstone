import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm";

const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
const occasions = ["None", "Birthday", "Anniversary"];

test("Renders the BookingForm heading", () => {
  render(<BookingForm availableTimes={availableTimes} occasions={occasions} />);
  const headingElement = screen.getByText("Number of guests");
  expect(headingElement).toBeInTheDocument();
});

test("booking form can be submitted", () => {
  const handleSubmit = jest.fn((e) => e.preventDefault());
  render(
    <BookingForm availableTimes={availableTimes} occasions={occasions} onSubmit={handleSubmit} />
  );
  const submitButton = screen.getByText("Make Your reservation");
  fireEvent.click(submitButton);
  expect(handleSubmit).toHaveBeenCalled();
});
