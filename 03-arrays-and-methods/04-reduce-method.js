// ============================================================================
// ТЕМА: Сложный reduce (агрегация данных в один объект-отчёт)
// ЗАЧЕМ НУЖЕН: За один проход по массиву посчитать несколько метрик,
// отфильтровать нужные события через if и собрать список ошибок через .push().
// ============================================================================

// Входные данные (имитация ответа от склада / API)
const orders = [
  { json: { order_id: "ORD-501", delivery_status: "delivered", client: { is_wholesale: true }, cargo: { weight_kg: 12.5, cost: 8400 } } },
  { json: { order_id: "ORD-502", delivery_status: "returned", client: { is_wholesale: false }, cargo: { weight_kg: 3.0, cost: 2100 } } },
  { json: { order_id: "ORD-503", delivery_status: "delivered", client: { is_wholesale: true }, cargo: {} } }, // битый груз без веса
  { json: { order_id: "ORD-504", delivery_status: "in_transit", client: { is_wholesale: false }, cargo: { weight_kg: 5.5, cost: 4300 } } },
  { json: { order_id: "ORD-505", delivery_status: "delivered", client: { is_wholesale: false }, cargo: { weight_kg: 4.0, cost: 3600 } } },
  { json: { order_id: "ORD-506", delivery_status: "returned", client: { is_wholesale: true } } } // вообще нет блока cargo
];

// ЗАПОМНИ 3 ПРАВИЛА СЛОЖНОГО REDUCE:
// 1. acc (аккумулятор) — это "бланк отчёта", который передаётся от элемента к элементу.
// 2. В самом конце reduce (после запятой) задаётся стартовый шаблон этого бланка.
// 3. Внутри фигурных скобок { } ОБЯЗАТЕЛЬНО пишем return acc в самом конце!
//    Если забыть return acc — на следующем круге acc станет undefined и всё рухнет.

const summary = orders.reduce((acc, item) => {
  const order = item?.json ?? null;

  // Условие 1: Считаем вес доставленных заказов (+= прибавляет число к счётчику)
  if (order?.delivery_status === "delivered") {
    acc.deliveredWeight += (order?.cargo?.weight_kg ?? 0);
  }

  // Условие 2: Считаем стоимость возвратов
  if (order?.delivery_status === "returned") {
    acc.returnedCost += (order?.cargo?.cost ?? 0);
  }

  // Условие 3: Считаем количество (штуки) доставленных оптовых заказов
  if (order?.client?.is_wholesale === true && order?.delivery_status === "delivered") {
    acc.wholesaleDeliveredCount += 1;
  }

  // Условие 4: Ловим заказы без веса (== null ловит сразу и null, и undefined)
  // .push() — кладёт новый элемент в конец массива (НЕ использовать += для массивов!)
  if (order?.cargo?.weight_kg == null) {
    acc.corruptedOrders.push(order?.order_id || "order isn't detected");
  }

  // Передаём обновлённый объект на следующий круг цикла
  return acc;
}, {
  deliveredWeight: 0,
  returnedCost: 0,
  wholesaleDeliveredCount: 0,
  corruptedOrders: []
});

// Проверка в терминале VS Code:
console.log("Итоговый отчёт:", summary)
