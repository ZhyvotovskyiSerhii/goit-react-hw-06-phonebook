import { configureStore } from "@reduxjs/toolkit";
import phoneBookReducer from "./reducers/PhoneBook";

export default configureStore({
  reducer: {
    phoneBook: phoneBookReducer,
  },
});
