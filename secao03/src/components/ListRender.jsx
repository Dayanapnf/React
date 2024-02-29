import { useState } from 'react';

const ListRender = () => {
  const [list] = useState(['Camilla', 'Gui', 'Cauã']);
  return (
    <div>
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListRender;
