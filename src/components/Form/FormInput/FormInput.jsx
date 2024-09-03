import React from 'react';

const FormInput = ({label, name, placeholder, change}) => {

  const handleChange = (e) => {
    const {value} = e.currentTarget;

    change(value);
  }

  return (
    <div className='mb-[20px] flex flex-col max-w-[300px] w-full gap-[10px]'>
      <label className='text-xl' htmlFor='name'>{label}</label>
      <input className='border-[1px] w-full border-gray-600 px-[10px] py-[5px]' type="text" name={name}
             placeholder={placeholder} onChange={handleChange}/>
    </div>
  )
};

export default FormInput;
