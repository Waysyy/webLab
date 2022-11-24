function List (){
    const numbers = ["Суси", "Чипсеки","Сухареки","Шаурма", "Рамен", "Вок", "Питса"];
    const listItems = numbers.map((number) =>
    <li>{number}</li>
    );
  return (<div>
    <ul>{listItems}</ul>
    </div>);
  }
  
  // const root = ReactDOM.createRoot(document.getElementById("root"));
  // root.render(
  //   <List />
  //   );

  export default List;