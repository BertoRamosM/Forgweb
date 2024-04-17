import { createSlice } from "@reduxjs/toolkit";

const initialCat = "Icons";

const categorySlice = createSlice({
  name: "categorySlice",
  initialState: {
    currentCat: initialCat,
  },
  reducers: {
    setCurrentCat: (state, action) => {
      state.currentCat = action.payload;
    },
  },
});

export const { setCurrentCat } = categorySlice.actions;

export default categorySlice.reducer;
