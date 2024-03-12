import { useEffect, useState } from 'react';
import './App.css';
const url = 'http://localhost:3000/products';
function App() {
  const [produtos, setProdutos] = useState([]);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  //1. resgatando os dados
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url);
      const data = await res.json();
      setProdutos(data);
    }
    fetchData();
  }, []);

  //2. add produtos
  const handleSubmit = async (e) => {
    e.preventDefault();
    const produtos = {
      name,
      price,
    };
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'aplication/json ',
      },
      body: JSON.stringify(produtos),
    });
  };
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
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input
              type="text"
              value={name}
              name="name"
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Nome:
            <input
              type="number"
              value={price}
              name="price"
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          <input type="submit" value="Criar" />
        </form>
      </div>
    </div>
  );
}

export default App;
