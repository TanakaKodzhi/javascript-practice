// МЕТОД FILTER: Базовый JS vs Боевой n8n

// 1. КАК ЭТО РАБОТАЕТ В ЧИСТОМ JS:
// Массив состоит из обычных объектов:
const users = [
  { name: "Ivan", age: 36, status_in_app: "VIP" },
  { name: "Maria", age: 18, status_in_app: "Basic" },
  { name: "Vasiliy", age: 15, status_in_app: "VIP" }
];
// Фильтруем напрямую через свойство объекта:
const basicUsers = users.filter((user) => user.status_in_app === "Basic");
// Результат: [ { name: "Maria", age: 18, status_in_app: "Basic" } ]


// 2. КАК ЭТО ПИШЕТСЯ В n8n (Code Node -> Run Once for All Items):
// В n8n входящие данные приходят через $input.all().

// Структура n8n оборачивает каждый элемент в { json: { ... } }:
const items = $input.all(); 
// Внутри лежит:
 [
   { json: { name: "Ivan", status_in_app: "VIP" } },
   { json: { name: "Maria", status_in_app: "Basic" } }
 ]
// Фильтруем элементы, обращаясь через .json:
return items.filter((item) => item.json.status_in_app === "Basic");

// Итог для n8n: дальше пойдут только те строки, у которых условие вернет true.
