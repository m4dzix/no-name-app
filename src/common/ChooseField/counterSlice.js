import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    roomValue: 1,
    hideRoomField: false,
    adultValue: 1,
    hideAdultField: false,
    childValue: 0,
    hideChildField: false,
  },
  reducers: {
    incrementRoom: (state) => {
      state.roomValue += 1;
    },
    decrementRoom: (state) => {
      state.roomValue -= 1;
    },
    toggleHideRoomField: (state) => {
      state.hideRoomField = !state.hideRoomField;
    },
    incrementAdult: (state) => {
      state.adultValue += 1;
    },
    decrementAdult: (state) => {
      state.adultValue -= 1;
    },
    toggleHideAdultField: (state) => {
      state.hideAdultField = !state.hideAdultField;
    },
    incrementChild: (state) => {
      state.childValue += 1;
    },
    decrement: (state) => {
      state.childValue -= 1;
    },
    toggleHideChildField: (state) => {
      state.hideChildField = !state.hideChildField;
    },
    hideAll: (state, initialState) => {
      state.hideRoomField = initialState.hideRoomField;
      state.hideAdultField = initialState.hideAdultField;
      state.hideChildField = initialState.hideChildField;
    },
  },
});

export const {
  incrementRoom,
  decrementRoom,
  toggleHideRoomField,
  incrementAdult,
  decrementAdult,
  toggleHideAdultField,
  incrementChild,
  decrementChld,
  toggleHideChildField,
  hideAll,
} = counterSlice.actions;

export const selectRoomValue = (state) => state.counter.roomValue;
export const selectAdultValue = (state) => state.counter.adultValue;
export const selectChildValue = (state) => state.counter.childValue;
export const selectHideRoomField = (state) => state.counter.hideRoomField;
export const selectHideAdultField = (state) => state.counter.hideAdultField;
export const selectHideChildField = (state) => state.counter.hideChildField;

export default counterSlice.reducer;
