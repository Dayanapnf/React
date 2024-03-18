import React, { useContext } from 'react';
import { CounterContext } from '../context/CounterContext';
import ChangeCounter from './ChangeCounter';
import { useCounterContext } from '../hooks/useCountercontext';

const Home = () => {
  // const { counter } = useContext(CounterContext);

  const { counter } = useCounterContext();
  return (
    <div>
      <h1>Home</h1>
      <h3>Valor do contador:{counter}</h3>
      <ChangeCounter />
    </div>
  );
};

export default Home;
