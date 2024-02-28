import { useState } from 'react';
import '../App.css';
const Challenge = () => {
  const [numero01, setNumero01] = useState(0);
  const [numero02, setNumero02] = useState(0);
  const [resultado, setResultado] = useState(0);

  const soma = () => {
    setResultado(numero01 + numero02);
  };
  return (
    <div className="container-bg">
      <div>
        <label>
          Digite um número
          <input
            type="number"
            value={numero01}
            onChange={(e) => setNumero01(parseInt(e.target.value))}
          />
        </label>
      </div>
      <div>
        <label>
          Digite um número
          <input
            type="number"
            value={numero02}
            onChange={(e) => setNumero02(parseInt(e.target.value))}
          />
        </label>
      </div>
      <button onClick={soma} className="btn">
        Somar
      </button>
      <h3>Resultado: {resultado} </h3>
    </div>
  );
};
export default Challenge;
