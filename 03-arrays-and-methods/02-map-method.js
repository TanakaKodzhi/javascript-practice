// Исходный массив "сырых" объектов от API
const rawUsers = [
  { id: 1, profile: { name: "Алексей", tg: "@alex" }, amount: 1500 },
  { id: 2, profile: null, amount: null },
  { id: 3, profile: { name: "", tg: "@irina" }, amount: 3200 }
];

// Трансформация в плоский массив с защитой от null и пустых строк
const cleanUsers = rawUsers.map((user) => {
  return {
    userId: user.id,
    name: user?.profile?.name || "Без имени",
    telegram: user?.profile?.tg ?? "Не указан",
    balance: user?.amount ?? 0
  }
})

console.log(cleanUsers)