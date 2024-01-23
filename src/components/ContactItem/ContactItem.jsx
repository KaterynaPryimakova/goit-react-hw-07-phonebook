import React from 'react';
import css from './ContactItem.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/operations';

export const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <li key={id} className={css.item} id={id}>
      <p>{name}</p>
      <p>{number}</p>
      <button onClick={() => handleDeleteContact(id)} className={css.button}>
        Delete
      </button>
    </li>
  );
};
