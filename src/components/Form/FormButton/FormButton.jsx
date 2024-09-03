import React from 'react';
import clsx from 'classnames';
const FormButton = ({value, click, accent = false}) => {
  return (
    <button onClick={click}
            className={clsx('max-w-[300px] mt-[10px] w-full flex justify-center text-white transition px-[10px] py-[7px]', {
              'bg-blue-700 hover:bg-blue-500': !accent,
              'bg-red-700 hover:bg-red-500': accent
            })}
            type='button'>{value}
    </button>
  )
};

export default FormButton;
