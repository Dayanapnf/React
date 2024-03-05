import { useState } from 'react';
import './MyForms.css';

const MyForms = ({ initialName, initialEmail }) => {
  const [name, setName] = useState(initialName ? initialName : '');
  const [email, setEmail] = useState(initialEmail ? initialEmail : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Nome:', name);
    console.log('Email:', email);
    console.log('Enviando formulário');
    setName('');
    setEmail('');
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nome:</label>
        <input
          type="text"
          name="name"
          placeholder="Digite seu nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="email">E-mail:</label>
        <input
          type="text"
          name="email"
          placeholder="Digite seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input type="submit" value="Enviar" className="inputbtn" />
      </form>
    </div>
  );
};

export default MyForms;
