import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunckAPI) => {
    try {
      const response = await axios.get(
        'https://65afa1fb2f26c3f2139b514c.mockapi.io/phonebook/contacts'
      );
      return response.data;
    } catch (error) {
      return thunckAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (data, thunkAPI) => {
    try {
      const response = await axios.post(
        'https://65afa1fb2f26c3f2139b514c.mockapi.io/phonebook/contacts',
        { ...data }
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(
        `https://65afa1fb2f26c3f2139b514c.mockapi.io/phonebook/contacts/${contactId}`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
