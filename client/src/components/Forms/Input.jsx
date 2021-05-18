import React from 'react';

export const Input = (props) => {
  const {
    name,
    type,
    placeholder,
    value,
    label,
    classes,
    handleChange,
    accept,
    children,
  } = props;

  return (
    <div className={classes}>
      <label htmlFor={name}>{label}:</label>
      {children}
      <input
        type={type}
        required
        name={name}
        placeholder={placeholder}
        onChange={handleChange}
        value={value}
        tabIndex={1}
        accept={accept}
      />
    </div>
  );
};
