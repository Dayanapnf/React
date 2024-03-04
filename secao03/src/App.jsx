import ImgReact from './assets/react.svg';
import ManageData from './components/ManageData';
import './App.css';
import ListRender from './components/ListRender';
import CarDetails from './components/CarDetails';
import Fragments from './components/Fragments';
import UserDetails from './components/UserDetails';
import MyForms from './components/MyForms';

function App() {
  const users = [
    { id: 1, name: 'joao', age: 24 },
    { id: 2, name: 'jonas', age: 44 },
    { id: 3, name: 'jurema', age: 14 },
  ];
  const cars = [
    { id: 1, brand: 'kia', color: 'branco', km: 0 },
    { id: 2, brand: 'fiat', color: 'vermelho', km: 1500 },
    { id: 3, brand: 'renault', color: 'laranja', km: 23500 },
  ];
  return (
    <div>
      {/* <h1>olá</h1>
      <img src={ImgReact} alt="react" />
      <ManageData />
      <ListRender />
      {cars.map((car) => (
        <CarDetails
          key={car.id}
          brand={car.brand}
          color={car.color}
          km={car.km}
        />
      ))}
      <Fragments propsfragments="teste" />
      {users.map((user) => (
        <UserDetails key={user.id} name={user.name} age={user.age} />
      ))} */}
      <MyForms />
    </div>
  );
}

export default App;
