import React, { useEffect } from 'react';
import { ContactItem } from 'components/ContactItem/ContactItem';

import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectError,
  selectFilter,
  selectisLoading,
} from '../../redux/contacts/selectors';
import { fetchContacts } from '../../redux/operations';

const getFilteredContacts = (contacts, filter) => {
  if (!contacts) {
    return [];
  }

  return contacts.filter(
    contact =>
      contact.name.toLowerCase().includes(filter.trim().toLowerCase()) ||
      contact.number.includes(filter)
  );
};

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  console.log(contacts);
  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectisLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filteredContacts = getFilteredContacts(contacts, filter);

  return (
    <>
      {isLoading && <p>Loading tasks...</p>}

      {error && <p>{error}</p>}

      {/* {contacts && contacts.length === 0 && (
        <p className={css.list}>
          The contacts list is empty. You can add new contacts.
        </p>
      )} */}
      {contacts && contacts.length > 0 && (
        <ul className={css.list}>
          {filteredContacts.map(({ name, number, id }) => {
            return <ContactItem name={name} number={number} id={id} key={id} />;
          })}
        </ul>
      )}
    </>
  );
};
