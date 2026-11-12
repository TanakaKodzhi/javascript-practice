// 1. Полный объект (всё на месте)
const user1 = {
  message: {
    from: { username: "artur_dev" },
    text: "Привет!"
  },
  wallet: { balance: 500 }
};

// 2. Частичный объект (нет username, нет text, на балансе 0)
const user2 = {
  message: {
    from: { id: 102 }
  },
  wallet: { balance: 0 }
};

// 3. Битый объект (вообще пустой)
const user3 = {};


// ТВОЯ ЗАДАЧА: дописать 3 строчки ниже

// Пример, как сделано для первого юзера:
const nick1 = user1?.message?.from?.username ?? "Ник не указан"
const money1 = user1?.wallet?.balance ?? 0
const text1 = user1?.message?.text ?? "Нет текста"

// Сделай то же самое для user2 (замени null на правильный код):
const nick2 = user2?.message?.from?.username ?? "Ник не указан"
const money2 = user2?.wallet?.balance ?? 0
const text2 = user2?.message?.text ?? "Нет текста"

// Сделай то же самое для user3 (замени null на правильный код):
const nick3 = user3?.message?.from?.username ?? "Ник не указан"
const money3 = user3?.wallet?.balance ?? 0
const text3 = user3?.message?.text ?? "Нет текста"

// Проверка результата:
console.log("Юзер 1:", nick1, money1, text1);
console.log("Юзер 2:", nick2, money2, text2);
console.log("Юзер 3:", nick3, money3, text3);