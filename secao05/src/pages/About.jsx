import React from 'react';
import { useCounterContext } from '../hooks/useCountercontext';

const About = () => {
  const { counter } = useCounterContext();
  return (
    <div>
      <h1>About</h1>
      <h3>Valor do contador é: {counter}</h3>
    </div>
  );
};

export default About;
