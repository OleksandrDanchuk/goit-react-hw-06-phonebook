import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
  },
  reducers: {
    addContact: {
      reducer(state, { payload }) {
        const resultCheck = state.contacts.find(
          obj =>
            obj.name.toLowerCase() === payload.name.toLowerCase() ||
            obj.number === payload.number
        );
        resultCheck
          ? alert(
              `${payload.name} or  number: ${payload.number} is already in contacts.`
            )
          : state.contacts.push(payload);
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteContact(state, { payload }) {
      state.contacts = state.contacts.filter(obj => obj.id !== payload.id);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export default contactsSlice.reducer;
