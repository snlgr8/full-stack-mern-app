import React from 'react';
import { useSelector } from 'react-redux';

const Home = () => {
  const user = useSelector((state) => state.user);
  console.log(user?.user?.data?.name); //Prints name if the user

  return <div>Welcome Home </div>;
};
export default Home;
