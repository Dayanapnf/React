import ImgReact from './assets/react.svg';
import ManageData from './components/ManageData';
import './App.css';
import ListRender from './components/ListRender';

function App() {
  return (
    <div>
      <h1>olá</h1>
      <img src={ImgReact} alt="react" />
      <ManageData />
      <ListRender />
    </div>
  );
}

export default App;
