const player = {
  first_name: "Tanaka",
  goals: 5,
  assists: 3
}

// Главное правило деструктуризации: Читаем СПРАВА на ЛЕВО

// Пример 1 Как правильно писать деструктуризацию (Сначала пишем скелет)
{
  const { first_name, goals } = player;
  console.log(first_name, goals);
}

// Пример 2 Переименование (если имя ключа кривое)
{
  const { first_name: name, goals } = player;
  console.log(name, goals);
} 

// Пример 3 Значение по умолчанию (если поля может не быть)
{
    const {first_name, goals, redCard = 0 } = player
    console.log(redCard) 
}

// Пример 4 Вложенный объект (Матрёшка)
{
    const player = {
        first_name: "Tanaka",
        goals: 5, 
        club_now: {
            title: "Спартак",
            leage: "Первая лига"
        }
    }
    const {club_now: { title = "Без клуба" } } = player 
    console.log(title)
}

// Пример 4A Вложенный объект (Матрёшка) СО СТРАХОВКОЙ ={}
{
const player = {
    first_name: "Vika",
    goals: 9,

}
const { club_now: { title = "Без клуба" } = {} } = player
console.log(title)
}









// Задание 5: Боевая имитация n8n (режим одного элемента, без .map)
{
  // Вот так выглядит ОДИН элемент, который прилетает в ноду Code
  const item = {
    json: {
      order_id: 772,
      buyer: {
        first_name: "Рома"
        // Поля delivery нет — клиент выбрал самовывоз
      }
    }
  };
  // ТВОЯ ЗАДАЧА:
  // Напиши ОДНУ строчку деструктуризации объекта item.json (справа должно быть = item.json),
  // чтобы достать 3 переменные:
  // 1. id (переименовать из order_id)
  // 2. clientName (переименовать из buyer.first_name)
  // 3. city (достать из buyer.delivery.city — со страховкой = {} для delivery и значением "Самовывоз" по умолчанию)

  // Пиши свою строчку тут:
 const {order_id: id, buyer: {first_name: clientName, delivery: {city = "Самовывоз"} = {}} = {}} = item.json

  // А дальше мы просто собираем ответ для следующей ноды n8n:
  const outputForN8n = {
    json: {
      id,
      clientName,
      city
    }
  };

  console.log(outputForN8n);
}