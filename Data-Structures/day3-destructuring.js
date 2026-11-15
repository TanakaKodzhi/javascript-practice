const player = {
  first_name: "Tanaka",
  goals: 5,
  assists: 3
}
// Главное правило деструктуризации: Читаем СПРАВА на ЛЕВО

// Пример 1 Как правильно писать деструктуризацию (Сначала пишем скелет)
  const { first_name, goals } = player;

// Пример 2 Переименование (если имя ключа кривое)
  const { first_name: name, goals } = player;
 
// Пример 3 Значение по умолчанию (если поля может не быть)
  const {first_name, goals, redCard = 0 } = player

// Пример 4 Вложенный объект (Матрёшка)
    const player = {
        first_name: "Tanaka",
        goals: 5, 
        club_now: {
            title: "Спартак",
            leage: "Первая лига"
        }
    }
    const {club_now: { title = "Без клуба" } } = player 

// Пример 4A Вложенный объект (Матрёшка) СО СТРАХОВКОЙ ={}

const player = {
    first_name: "Vika",
    goals: 9,
}
const { club_now: { title = "Без клуба" } = {} } = player


// Закрепление
{
const paymentWebhook = {
    event: "payment.succeeded",
    payload: {
      payment_id: "pay_99812",
      amount: {
        total: 499,
        currency: "RUB"
      },
      customer: {
        email: "buyer@mail.ru"
        // Внимание: объекта promo (промокод) и объекта referral (реферал) тут вообще нет!
      }
    }
  };
  // ЗАДАЧА:
  // Напиши ОДНУ строчку деструктуризации объекта paymentWebhook (= paymentWebhook),
  // чтобы достать 5 переменных:
  // 1. paymentId (переименовать из payload.payment_id, со страховкой = {} для payload)
  // 2. sum (переименовать из payload.amount.total, со страховкой = {} для amount и значением 0 по умолчанию)
  // 3. email (из payload.customer.email, со страховкой = {} для customer)
  // 4. promoCode (переименовать из payload.customer.promo.code — со страховкой = {} для promo и значением "NO_PROMO" по умолчанию)
  // 5. partnerId (переименовать из payload.referral.partner_id — со страховкой = {} для referral и значением null по умолчанию)

  // Пиши строчку тут:
const {payload: {payment_id: paymentId, amount: {total: sum = 0} = {}, customer: {promo: {code: promoCode = "NO_PROMO"} 
= {}, email} = {}, referral: {parther_id: partnerId = null} = {}}= {}} = paymentWebhook

  console.log({paymentId, sum, email, promoCode, partnerId})
}


