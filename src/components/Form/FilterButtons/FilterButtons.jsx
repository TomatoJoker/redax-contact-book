import React from 'react';
import FormButton from 'components/Form/FormButton';
import { statusFilters } from '../../../redux/constants';
import { useDispatch } from 'react-redux';
import { setStatus } from '../../../redux/filterSlice';

const FilterButtons = (props) => {
  const dispatch = useDispatch();
  return (
    <div className='flex gap-[20px] my-[20px]'>
      <FormButton click={() => dispatch(setStatus(statusFilters.all))} value={statusFilters.all}/>
      <FormButton click={() => dispatch(setStatus(statusFilters.mob))} value={statusFilters.mob}/>
      <FormButton click={() => dispatch(setStatus(statusFilters.home))} value={statusFilters.home}/>
    </div>
  )
};

export default FilterButtons;
