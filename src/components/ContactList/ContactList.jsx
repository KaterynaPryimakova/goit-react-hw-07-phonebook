import React from 'react';
import { ContactItem } from 'components/ContactItem/ContactItem';

import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { selectContacts, selectFilter } from '../../redux/contacts/selectors';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const getFilteredContacts = () => {
    return contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(filter.trim().toLowerCase()) ||
        contact.number.includes(filter)
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <>
      {contacts.length === 0 && (
        <p className={css.list}>
          The contacts list is empty. You can add new contacts.
        </p>
      )}
      {contacts.length > 0 && (
        <ul className={css.list}>
          {filteredContacts.map(({ name, number, id }) => {
            return <ContactItem name={name} number={number} id={id} key={id} />;
          })}
        </ul>
      )}
    </>
  );
};
