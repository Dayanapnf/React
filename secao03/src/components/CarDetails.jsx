import React from 'react';

const CarDetails = ({ brand, color, km }) => {
  return (
    <div>
      <h2>Detalhes do carro</h2>
      <ul>
        <li>Marca: {brand}</li>
        <li>Cor: {color}</li>
        <li>km: {km}</li>
      </ul>
    </div>
  );
};

export default CarDetails;
