import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { statusFilters } from "../../../redux/constants";
import {save} from '../../../redux/contactSlice';
import FormInput from 'components/Form/FormInput';
import FormButton from 'components/Form/FormButton';
import Select from 'react-select'
import { nanoid } from '@reduxjs/toolkit';
const FormSearch = (props) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [filter, setFilter] = useState('')

  const options = [
    { value: statusFilters.mob, label: statusFilters.mob },
    { value: statusFilters.home, label: statusFilters.home }
  ]
  const handleSaveName = (value) => {
    setName(value);
  }

  const handleSavePhone = (value) => {
    setPhone(value);
  }

  const handleSelect = (e) => {
    const {value} = e;

    setFilter(value)
  }


  const handleChange = () => {
    dispatch(save({id: nanoid(), name, phone, filter}))
  }

  return (
    <form className='border-black border-[1px] p-[20px] flex flex-col items-start max-w-[500px]'>
      <FormInput label='Name' name='name' placeholder='Your name' change={handleSaveName}/>
      <FormInput label='Number' name='phone' placeholder='Your phone' change={handleSavePhone}/>
      <Select
        options={options}
        className='w-full max-w-[300px] p-[0px]'
        onChange={handleSelect}
        classNames={{
          control: (state) =>
            state.isFocused ? 'rounded-none border-[1px] w-full border-gray-600 px-[2px] py-[3px]' : 'rounded-none border-[1px] w-full border-gray-600 px-[8px] py-[3px]',
        }} />
      <FormButton value='Send' click={handleChange}/>
    </form>
  )
};

export default FormSearch;
