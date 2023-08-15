import { createAction } from "@reduxjs/toolkit";

export const increment = createAction("INCREMENT");
export const decrement = createAction("DECREMENT");
export const setStep = createAction("SETSTEP");

// import { DECREMENT, INCREMENT, SETSTEP } from "./types";

// export const increment = (step) => ({ type: INCREMENT, payload: step });
// export const decrement = (step) => ({ type: DECREMENT, payload: step });
// export const setStep = (value) => ({ type: SETSTEP, payload: value });
