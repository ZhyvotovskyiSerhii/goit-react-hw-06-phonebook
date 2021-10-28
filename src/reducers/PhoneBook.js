import { createReducer } from "@reduxjs/toolkit";
import * as Actions from "../actions/PhoneBook";
import { generate } from "shortid";

const getInitialContacts = () => {
  const parsed = JSON.parse(localStorage.getItem("contacts") || "[]");
  return parsed.length
    ? parsed
    : [
        {
          id: generate(),
          name: "Rosie Simpson",
          number: "459-12-56",
        },
        {
          id: generate(),
          name: "Hermione Kline",
          number: "443-89-12",
        },
        {
          id: generate(),
          name: "Eden Clements",
          number: "645-17-79",
        },
        {
          id: generate(),
          name: "Annie Copeland",
          number: "227-91-26",
        },
      ];
};

const initialState = {
  items: getInitialContacts(),
  filter: "",
};

const phoneBookReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(Actions.addContact, (state, action) => {
      state.items = [...state.items, action.payload.item];
    })
    .addCase(Actions.removeContact, (state, action) => {
      state.items = [
        ...state.items.filter((item) => item.id !== action.payload.id),
      ];
    })
    .addCase(Actions.filterContact, (state, action) => {
      state.filter = action.payload.filter;
    });
});

export default phoneBookReducer;
