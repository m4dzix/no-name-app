import { createSlice } from "@reduxjs/toolkit";

const navigationSlice = createSlice({
  name: "navigation",
  initialState: { hideNavigation: true },
  reducers: {
    toggleHideNavigation: (state) => {
      state.hideNavigation = !state.hideNavigation;
    },
  },
});

export const { toggleHideNavigation } = navigationSlice.actions;
export const SelectHideNavigationState = (state) =>
  state.navigation.hideNavigation;

export default navigationSlice.reducer;
