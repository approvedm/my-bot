exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 200, body: "OK" };
  }

  const update = JSON.parse(event.body);
  const chatId = update.message?.chat?.id;

  if (chatId) {
    await fetch(`https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text: "Hello! 👋" }),
    });
  }

  return { statusCode: 200, body: "OK" };
};