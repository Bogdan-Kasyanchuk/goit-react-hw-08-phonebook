import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast';

const BASE_URL = 'https://61e94b807bc0550017bc61e1.mockapi.io/api/v1/contacts';

export const getContact = createAsyncThunk(
  'contact/get',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(BASE_URL);
      toast.success('Contacts loaded successfully!');
      return data;
    } catch (error) {
      toast.error(`${error}`);
      return rejectWithValue(error);
    }
  },
);

export const addContact = createAsyncThunk(
  'contact/add',
  async (contact, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(BASE_URL, contact);
      toast.success('Contact added successfully!');
      return data;
    } catch (error) {
      toast.error(`${error}`);
      return rejectWithValue(error);
    }
  },
);

export const deleteContact = createAsyncThunk(
  'contact/delete',
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(BASE_URL + `/${id}`);
      toast.success('Contact deleted successfully!');
      return id;
    } catch (error) {
      toast.error(`${error}`);
      return rejectWithValue(error);
    }
  },
);

export const editContact = createAsyncThunk(
  'contact/edit',
  async ({ id, name, phone }, { rejectWithValue }) => {
    try {
      const { data } = await axios.put(BASE_URL + `/${id}`, {
        name,
        phone,
      });
      toast.success('Contact changed successfully!');
      return data;
    } catch (error) {
      toast.error(`${error}`);
      return rejectWithValue(error);
    }
  },
);
