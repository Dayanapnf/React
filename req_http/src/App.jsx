import { useEffect, useState } from 'react';
import './App.css';
const url = 'http://localhost:3000/products';
function App() {
  const [produtos, setProdutos] = useState([]);

  //1. resgatando os dados
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url);
      const data = await res.json();
      setProdutos(data);
    }
    fetchData();
  }, []);
  return (
    <div className="App">
      <h1>Lista de produtos</h1>
      <ul style={{ listStyle: 'none' }}>
        {produtos.map((produtos) => (
          <li key={produtos.id}>
            {produtos.name} - R$: {produtos.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
