require("dotenv").config();
const { Client, GatewayIntentBits, Events } = require("discord.js");

async function main() {
    const client = new Client({
        allowedMentions: { repliedUser: false },
        intents: [
            GatewayIntentBits.Guilds,
            GatewayIntentBits.GuildMessages,
            GatewayIntentBits.MessageContent,
        ],
    });

    const prefix = "d!";

    client.on(Events.MessageCreate, async (message) => {
        if (!message.content.startsWith(prefix)) return;

        if (message.content === prefix + "ping") {
            await message.reply("Pong!");
        }
    });

    client.once(Events.ClientReady, () => {
        console.log("Ready!");
    });

    await client.login(process.env.DISCORD_TOKEN);
}

main();
