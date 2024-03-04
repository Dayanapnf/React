import './MyForms.css';
const MyForms = () => {
  return (
    <div>
      <form>
        <div className="container">
          <label htmlFor="name">Nome:</label>
          <input type="text" name="name" placeholder="Digite seu nome" />
          <input type="submit" value="Enviar" className="inputbtn" />
        </div>
        <label>
          <span>E-mail</span>
          <input type="text" name="name" placeholder="Digite seu nome" />
        </label>
        <input type="submit" value="Enviar" className="inputbtn" />
      </form>
    </div>
  );
};

export default MyForms;
