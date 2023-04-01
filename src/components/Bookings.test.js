import { render, screen } from "@testing-library/react";
import Bookings from "./Bookings";

const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
const occasions = ["None", "Birthday", "Anniversary"];

test("Renders the BookingForm heading", () => {
  render(<Bookings availableTimes={availableTimes} occasions={occasions} />);
  const headingElement = screen.getByText("Number of guests");
  expect(headingElement).toBeInTheDocument();
});
