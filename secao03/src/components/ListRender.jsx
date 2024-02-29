import { useState } from 'react';

const ListRender = () => {
  const [list] = useState(['Camilla', 'Gui', 'Cauã']);
  const [users] = useState([
    { id: 1, nome: 'matheus', idade: 28 },
    { id: 482518, nome: 'felipe', idade: 24 },
    { id: 12526, nome: 'galileu', idade: 52 },
  ]);

  return (
    <div>
      <ul>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.nome} - {user.idade}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListRender;
