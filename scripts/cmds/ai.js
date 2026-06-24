module.exports = {
  config: {
    name: "ai",
    aliases: ["chat", "question"],
    version: "1.0",
    author: "Ariel Aks",
    countDown: 2,
    role: 0,
    shortDescription: {
      en: "AI Command"
    },
    longDescription: {
      en: "AI reply system for Ariel Bot"
    },
    category: "general",
    guide: {
      en: "{pn} - Get info about the bot"
    }
  },

  onStart: async function ({ api, event }) {
    const { threadID } = event;
    return api.sendMessage(`✅ This bot was created by **Ariel Aks** 🤖`, threadID);
  },

  onChat: async function ({ api, event }) {
    const { body, threadID } = event;
    const message = body.toLowerCase();

    // Si le message contient "ai" ou "AI"
    if (message.includes("ai") || message.includes("ai?")) {
      return api.sendMessage(`✅ This bot was created by **Ariel Aks** 🤖`, threadID);
    }
  }
};

