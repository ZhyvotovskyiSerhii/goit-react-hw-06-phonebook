import { createAction } from "@reduxjs/toolkit";
import * as PhoneBookActions from "../constants/PhoneBook";

export const addContact = createAction(PhoneBookActions.ADD_CONTACT);
export const removeContact = createAction(PhoneBookActions.REMOVE_CONTACT);
export const filterContact = createAction(PhoneBookActions.FILTER_CONTACT);
