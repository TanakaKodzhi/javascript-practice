/**
 * ТЕМА: Method Chaining (Цепочки методов)
 * Суть: Вызов методов друг за другом через точку без создания промежуточных переменных.
 * Работает только пока каждый предыдущий метод возвращает новый массив.
 */

const products = [
  { sku: "PUBG-060", title: "PUBG Mobile 60 UC", inStock: true, basePrice: 85, discount: 5 },
  { sku: "TG-STARS-100", title: "Telegram Stars 100", inStock: false, basePrice: 180, discount: 0 },
  { sku: "YT-PREM-1M", title: "YouTube Premium 1 мес", inStock: true, basePrice: 250 }, // без поля discount
  { sku: "TG-PREM-3M", title: "Telegram Premium 3 мес", inStock: true, basePrice: 950, discount: 50 }
];

// Правильный порядок: сначала отсекаем лишнее (filter), потом меняем форму (map)
const readyCatalog = products
  .filter(item => item.inStock === true && item.basePrice > 100)
  .map(item => ({
    id: item.sku,
    name: item.title,
    // Скобки вокруг (item.discount ?? 0) обязательны: у вычитания приоритет выше, чем у ??
    finalPrice: item.basePrice - (item.discount ?? 0)
  }));

console.log(readyCatalog);
