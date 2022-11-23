function List (){
    const numbers = ["Суши", "Чипсеки","Сухареки","Шаурма", "Рамен", "Вок", "Пицца"];
    const listItems = numbers.map((number) =>
    <li>{number}</li>
    );
  return (<div>
    <ul>{listItems}</ul>
    </div>);
  }
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <List />
    );