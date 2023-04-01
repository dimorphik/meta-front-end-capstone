import { render, screen } from "@testing-library/react";
import Main, { createDateFromString } from "./Main";
import { fetchAPI } from "../api";
import { initializeTimes, updateTimes } from "./Main";

test("initializeTimes returns the proper value", () => {
  const date = new Date();
  const expectedTimes = fetchAPI(date);
  const availableTimes = initializeTimes();
  expect(availableTimes).toEqual(expectedTimes);
});

test("updateTimes returns the proper value", () => {
  const dateString = "2023-04-01";
  const date = createDateFromString(dateString);
  const expectedTimes = fetchAPI(date);
  const action = { value: dateString };
  const result = updateTimes({}, action);
  expect(result).toEqual(expectedTimes);
});
