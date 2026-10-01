exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 200, body: "OK" };
  }

  const update = JSON.parse(event.body);
  const chatId = update.message?.chat?.id;

  console.log("Token exists:", !!process.env.BOT_TOKEN);
  console.log("Chat ID:", chatId);

  if (chatId) {
    const res = await fetch(
      `https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: chatId, text: "Hello! 👋" }),
      }
    );
    console.log("Telegram says:", res.status, await res.text());
  }

  return { statusCode: 200, body: "OK" };
};
