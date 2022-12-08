function List (){
    const numbers = ["Суши", "Чипсеки","Сухареки","Шаурма", "Рамен", "Вок", "Питса"];
    const listItems = numbers.map((number) =>
    <li>{number}</li>
    );
  return (<div>
    <ul>{listItems}</ul>
    </div>);
  }
  

  export default List;