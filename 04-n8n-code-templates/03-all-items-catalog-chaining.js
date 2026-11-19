/**
 * N8N CODE NODE TEMPLATE
 * Режим: Run Once for All Items
 * Задача: Отфильтровать пачку входящих товаров по наличию/цене и пересчитать прайс с учетом скидки.
 */

const orders = $input.all();

return orders
  .filter(order => order?.json?.inStock === true && order?.json?.basePrice > 100)
  .map(order => {
    return {
      json: {
        id: order?.json?.sku || "id not detected",
        name: order?.json?.title || "name not detected",
        finalPrice: order?.json?.basePrice - (order?.json?.discount ?? 0)
      }
    }
  })