import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "../..//src/Feature/Slice/userSlice";
export const store = configureStore({
  reducer: cardReducer,
});
