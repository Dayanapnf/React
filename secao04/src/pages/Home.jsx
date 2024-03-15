import React from 'react';
import './Home.css';
import { useFetch } from '../hooks/useFetch';
import { Link } from 'react-router-dom';
const Home = () => {
  const url = 'http://localhost:3000/products';
  const { data: itens, loading, error } = useFetch(url);
  return (
    <div>
      <h1>Produtos</h1>
      {error && <p>{error}</p>}
      <ul className="products">
        {itens &&
          itens.map((item) => (
            <li key={item.id}>
              <h2>{item.name}</h2>
              <p>Preço: {item.price}</p>
              <Link to={`/products/${item.id}`}>Detalhes</Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Home;
