async function get()
{
  let response = await fetch("https://reqres.in/api/users?page=2");

  if (response.ok) { // если HTTP-статус в диапазоне 200-299
    // получаем тело ответа (см. про этот метод ниже)
    let arrayString =  [];
    let json = await response.json();
    

    let paragraph = document.getElementById('input-request');
paragraph.textContent = JSON.parse(json).toString;

  } else {
    alert("Ошибка HTTP: " + response.status);
  }

  

}

get();

