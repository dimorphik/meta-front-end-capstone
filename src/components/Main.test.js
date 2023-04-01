import { render, screen } from "@testing-library/react";
import Main from "./Main";
import { initializeTimes, updateTimes } from "./Main";

test("initializeTimes returns the proper value", () => {
  const expected = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  const result = initializeTimes();
  expect(result).toEqual(expected);
});

test("updateTimes returns the proper value", () => {
  const randomArrayLength = Math.floor(Math.random() * 10);
  const state = Array.from(Array(randomArrayLength));
  const action = Math.floor(Math.random() * 1);
  const result = updateTimes(state, action);
  expect(result).toEqual(state);
});
