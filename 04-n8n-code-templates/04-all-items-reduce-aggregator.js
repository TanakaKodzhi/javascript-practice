// ============================================================================
// ШАБЛОН n8n: Агрегатор отчёта за один проход (замена связки IF + Aggregate)
// РЕЖИМ НОДЫ: Run Once for All Items
// ВХОД: Массив элементов через $input.all()
// ВЫХОД: Один элемент [{ json: summary }] для отправки в Telegram / Google Sheets / БД
// ============================================================================

const items = $input.all();
const summary = items.reduce((acc, item) => {
  const order = item?.json ?? null;

  // 1. Суммирование по условию (защита от отсутствующих полей через ?? 0)
  if (order?.delivery_status === "delivered") {
    acc.deliveredWeight += (order?.cargo?.weight_kg ?? 0);
  }
  if (order?.delivery_status === "returned") {
    acc.returnedCost += (order?.cargo?.cost ?? 0);
  }
  // 2. Подсчёт количества совпадений (двойное условие через &&)
  if (order?.client?.is_wholesale === true && order?.delivery_status === "delivered") {
    acc.wholesaleDeliveredCount += 1;
  }
  // 3. Сбор ID битых записей в массив ошибок
  if (order?.cargo?.weight_kg == null) {
    acc.corruptedOrders.push(order?.order_id || "order isn't detected");
  }
  return acc;
}, {
  deliveredWeight: 0,
  returnedCost: 0,
  wholesaleDeliveredCount: 0,
  corruptedOrders: []
});
// Обязательная обёртка формата данных n8n на выходе из ноды
return [
  {
    json: summary
  }
];
