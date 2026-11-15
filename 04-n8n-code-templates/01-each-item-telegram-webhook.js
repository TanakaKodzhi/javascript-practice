/**
 * Парсер входящего вебхука Telegram для ноды Code в n8n
 * Режим ноды (Mode): Run Once for Each Item
 *
 * Входной JSON ($input.item.json):
 * { "update_id": 8841209, "message": { "from": { "id": 99182736, "first_name": "Максим" }, "chat": { "type": "supergroup" }, "text": "/start ref_55" } }
 *
 * Результат: плоский объект с безопасными заглушками вместо undefined/null
 */

const item = $input.item.json;
const { update_id, message: msg = {} } = item;

const from = msg?.from ?? {};
const chat = msg?.chat ?? {};

const tg_event = {
  user_id: from?.id ?? null,
  name: from?.first_name ?? "Аноним",
  chat_type: chat?.type ?? "unknown",
  command: msg?.text ?? "пустое сообщение",
  username: from?.username ?? "no_username"
};

return {
  json: {
    update_id,
    ...tg_event
  }
};
