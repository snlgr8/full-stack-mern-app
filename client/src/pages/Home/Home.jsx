import React, { useState } from 'react';
import { Input } from '../../components/Forms/Input';

const Home = () => {
  const [val, setVal] = useState('');
  const handleChange = (e) => {
    setVal(e.target.value);
  };

  return (
    <div>
      <Input
        name='username'
        value={val}
        placeholder='Enter username'
        type='text'
        handleChange={handleChange}
        label='Username'
        classes='n'
      />
    </div>
  );
};
export default Home;
