
// 1. ДОБАВЛЕНИЕ НОВОГО ПОЛЯ
const user = {
  name: "Ivan",
  role: "Admin"
};
// ...user высыпает старые поля, через запятую дописываем новое
const fullUser = { ...user, isOnline: true };
// Результат: { name: "Ivan", role: "Admin", isOnline: true 

// 2. ОБНОВЛЕНИЕ (ПЕРЕЗАПИСЬ) ПОЛЯ
const car = {
  brand: "Toyota",
  color: "red"
};
// ...car высыпает всё, а color: "white" справа затирает старый red
const myCar = { ...car, color: "white" };
// Результат: { brand: "Toyota", color: "white" }

// 3. БЕЗОПАСНАЯ КОПИЯ ДЛЯ n8n (Паттерн обогащения)
const incomingLead = {
  name: "Артур",
  phone: "+79991234567",
  utm_source: "vk",
  utm_campaign: "promo_autumn",
  city: "Хабаровск",
  comment: "Хочу скидку"
};
// Создаём независимый объект со всеми полями входящего JSON: 
const client = { ...incomingLead, status: "new" };
// Результат: сохраняются все 6 полей лида + добавляется status: "new"
// Также сокращает написание return в конце кода в n8n:
