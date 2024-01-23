import React, { useState } from 'react';
import css from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
// import { nanoid } from '@reduxjs/toolkit';
// import { addContact } from '../../redux/contacts/contactsSlice';
// import { selectContacts } from '../../redux/contacts/selectors';
import { addContact } from '../../redux/operations';

export const ContactForm = () => {
  const dispatch = useDispatch();
  // const contacts = useSelector(selectContacts);
  const [name, setName] = useState('');
  const [phone, setNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'phone':
        setNumber(value);
        break;

      default:
        console.warn(`There is no input with name: ${name}`);
    }
  };

  const handleAddContact = evt => {
    evt.preventDefault();

    const contactData = { name, phone };

    // const alreadyExist = contacts.some(
    //   contact => contact.name.toLowerCase() === contactData.name.toLowerCase()
    // );

    // if (alreadyExist) {
    //   alert(`${contactData.name} is already in contacts.`);
    //   return;
    // }
    // const newContact = {
    //   ...contactData,
    //   id: nanoid(),
    // };

    // dispatch(addContact(newContact));
    dispatch(addContact(contactData));

    setName('');
    setNumber('');
  };

  return (
    <form className={css.form} onSubmit={handleAddContact}>
      <label>
        Enter your name:
        <input
          onChange={handleChange}
          type="text"
          name="name"
          autoComplete="on"
          value={name}
          required
        />
      </label>

      <label>
        Enter your number:
        <input
          onChange={handleChange}
          type="tel"
          name="phone"
          autoComplete="on"
          value={phone}
          required
        />
      </label>

      <button className={css.button} type="submit">
        Add contact
      </button>
    </form>
  );
};
