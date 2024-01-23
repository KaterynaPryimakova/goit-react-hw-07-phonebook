import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// axios.defaults.baseURL =
//   'https://65afa1fb2f26c3f2139b514c.mockapi.io/phonebook/contacts';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunckAPI) => {
    try {
      const response = await axios.get(
        'https://65afa1fb2f26c3f2139b514c.mockapi.io/phonebook/contacts'
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunckAPI.rejectWithValue(error.message);
    }
  }
);

export const addNewContacts = createAsyncThunk(
  'contacts/addContacts',
  async (data, thunkAPI) => {
    try {
      const response = await axios.post('', { data });
      console.log(response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
