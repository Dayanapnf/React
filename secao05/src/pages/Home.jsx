import React, { useContext } from 'react';
import { CounterContext } from '../context/CounterContext';
import ChangeCounter from './ChangeCounter';

const Home = () => {
  const { counter } = useContext(CounterContext);
  return (
    <div>
      <h1>Home</h1>
      <h3>Valor do contador:{counter}</h3>
      <ChangeCounter />
    </div>
  );
};

export default Home;
