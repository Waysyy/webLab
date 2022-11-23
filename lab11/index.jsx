
const e = React.createElement;

function List (){
  const numbers = ["Суши", "Чипсеки","Сухареки","Шаурма", "Рамен", "Вок", "Пицца"];
  const listItems = numbers.map((number) =>
  <li>{number}</li>
  );
return <ul>{listItems}</ul>;
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <List />,
  document.getElementById('root'));

// const domContainer = document.querySelector('#root');
// const root = ReactDOM.createRoot(domContainer);
// root.render(e(test));