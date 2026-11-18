// Режим ноды: Run Once for All Items
// Задача: отфильтровать реальные оплаченные заказы и привести их к плоской структуре

const items = $input.all();

// 1. Оставляем только оплаченные и не тестовые заказы
const paidOrders = items.filter(
  (client) => client?.json?.status === "paid" && client?.json?.is_test === false
);

// 2. Пересобираем каждый заказ в плоский объект с защитой от пропущенных полей
const result = paidOrders.map((item) => {
  const orderId = item?.json?.order_id ?? "order is not detected";
  const clientName = item?.json?.customer?.name || "name is not detected";
  const clientTg = item?.json?.customer?.contacts?.telegram ?? "telegram username not add";
  const orderSum = item?.json?.payment?.amount ?? 0;

  return {
    json: {
      id: orderId,
      client: clientName,
      tg: clientTg,
      sum: orderSum
    }
  };
});

// Возвращаем готовый массив items для следующих нод n8n
return result
