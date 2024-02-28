import { useState } from 'react';

const Events = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <button onClick={handleClick}>Clique aqui {count}</button>
    </div>
  );
};
export default Events;
