import React from 'react';

const UserDetails = ({ name, age }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>Idade:{age}</p>
      {age >= 18 ? (
        <p>Pode tirar a habilitação</p>
      ) : (
        <p>Não pode tirar habilitação</p>
      )}
    </div>
  );
};

export default UserDetails;
