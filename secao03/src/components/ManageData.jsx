import { useState } from 'react';

const ManageData = () => {
  const [someData, setSomeData] = useState(10);
  const mudaNum = () => {
    setSomeData(15);
  };
  return (
    <div>
      <p>Valor: {someData}</p>
      <button onClick={mudaNum}>Mudar variável</button>
      <p>Valor : {someData}</p>
    </div>
  );
};

export default ManageData;
