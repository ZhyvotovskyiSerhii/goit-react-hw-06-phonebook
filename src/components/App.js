import React, { useState } from "react";
import { generate } from "shortid";
import styles from "./App.module.css";
import Section from "./Section";
import Form from "./Form";
import Contacts from "./Contacts";
import ContactsFilter from "./Contacts/ContactsFilter";
import Alert from "./Alert";
import { connect } from "react-redux";
import * as actions from "../actions/PhoneBook";

const App = ({ items, filter, addContact, removeContact, filterContact }) => {
  const [error, setError] = useState("");

  const addNewContact = ({ name, number }) => {
    const isAlreadyExist = items.find(
      (contact) => contact.name === name || contact.number === number
    );
    if (isAlreadyExist) {
      setError(`${name} is already in contacts`);

      setTimeout(() => {
        setError("");
      }, 2000);
    } else {
      addContact({
        item: {
          id: generate(),
          name,
          number,
        },
      });
    }
  };

  const deleteContact = (contactId) => {
    removeContact({ id: contactId });
  };

  const changeFilter = (e) => {
    filterContact({ filter: e.target.value });
  };

  const filterContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return items
      .filter((contact) =>
        contact.name.toLowerCase().includes(normalizedFilter)
      )
      .sort((a, b) => a.name.localeCompare(b.name));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles["form-container"]}>
        <Section title={"Phonebook"}>
          <Form onSubmit={addNewContact} />
        </Section>

        <Section>
          <div className={styles.container}>
            <ContactsFilter value={filter} onChange={changeFilter} />
            <Contacts contacts={filterContacts()} onDelete={deleteContact} />
          </div>
        </Section>
      </div>
      <Alert visible={Boolean(error)} error={error} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  items: state.phoneBook.items,
  filter: state.phoneBook.filter,
});

export default connect(mapStateToProps, { ...actions })(App);
