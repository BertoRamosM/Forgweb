import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "../redux/CategorySlice";

const store = configureStore({
  reducer: {
    category: categoryReducer,
  },
});

export default store;
