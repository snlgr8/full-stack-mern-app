import React from 'react';
import Add from '@material-ui/icons/Add';
import './button.css';

export const CustomButton = ({ text }) => {
  return (
    <button className='CustomButtonBase-root CustomButton-root CustomButton-contained makeStyles-addBtn-21'>
      <Add />
      {text}
    </button>
  );
};
