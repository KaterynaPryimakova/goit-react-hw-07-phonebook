export const selectContacts = store => store.phonebook.contacts.items;
export const selectFilter = store => store.phonebook.filter;
export const selectisLoading = store => store.phonebook.contacts.isLoading;
export const selectError = store => store.phonebook.contacts.error;
