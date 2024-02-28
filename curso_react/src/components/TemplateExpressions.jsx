import MyComponent from './MyComponent';
const TemplateExpressions = () => {
  const name = 'Dayana';
  const data = {
    age: 29,
    job: 'Estudante',
  };
  return (
    <div>
      <h1>Olá, meu nome é {name}, tudo bem?</h1>
      <h3>
        Tenho {data.age} anos e sou {data.job}
      </h3>
      <MyComponent />
    </div>
  );
};
export default TemplateExpressions;
