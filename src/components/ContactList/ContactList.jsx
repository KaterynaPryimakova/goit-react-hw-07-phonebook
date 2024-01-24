import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  selectError,
  selectFilteredContacts,
  selectisLoading,
} from '../../redux/contacts/selectors';

import { fetchContacts } from '../../redux/operations';
import { ContactItem } from 'components/ContactItem/ContactItem';
import css from './ContactList.module.css';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectisLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {isLoading && <p>Loading...</p>}

      {error && <p>{error}</p>}

      {contacts && contacts.length > 0 && (
        <ul className={css.list}>
          {contacts.map(({ name, phone, id }) => {
            return <ContactItem name={name} number={phone} id={id} key={id} />;
          })}
        </ul>
      )}
    </>
  );
};
