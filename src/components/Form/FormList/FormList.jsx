import React from 'react';
import { useDispatch } from 'react-redux';
import { remove } from '../../../redux/contactSlice';
import FormButton from 'components/Form/FormButton';

const FormList = ({ data }) => {
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(remove({ id }));
  };

  return (
    <ul className="mt-[40px] list-disc pl-[40px]">
      {data.map(({ id, name, phone }) => (
        <li key={id}>{name}: {phone}
          <FormButton value="Remove" accent={true} click={() => handleRemove(id)} />
        </li>
      ))}
    </ul>
  );
};

export default FormList;
