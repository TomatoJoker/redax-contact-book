import React from 'react';
import { useSelector } from 'react-redux';
import FormSearch from './FormSearch';
import FormList from './FormList';
import FilterButtons from './FilterButtons';
import { statusFilters } from '../../redux/constants';
import { getContacts } from '../../redux/contactSlice';
import { getFilter } from '../../redux/filterSlice';

const getVisibleTasks = (contacts, statusFilter, statusFilters) => {

  if (statusFilter === statusFilters.home || statusFilter === statusFilters.mob) {
    return contacts.filter(contact => contact.filter === statusFilter);
  }

  return contacts;
};

const Form = () => {
  const contacts = useSelector(getContacts);
  const statusFilter = useSelector(getFilter);

  return (
    <>
      <FormSearch />
      <FilterButtons />
      <FormList data={getVisibleTasks(contacts, statusFilter, statusFilters)} />
    </>
  );
};

export default Form;
