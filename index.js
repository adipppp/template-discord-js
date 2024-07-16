require("dotenv").config();
const { Client, GatewayIntentBits, Events } = require("discord.js");

async function main() {
    const client = new Client({
        intents: [GatewayIntentBits.Guilds, GatewayIntentBits.MessageContent],
    });

    const prefix = "d!";

    client.on(Events.MessageCreate, async (message) => {
        if (!message.content.startsWith(prefix)) return;

        if (message.content === "ping") {
            await message.reply("pong");
        }
    });

    client.once(Events.Ready, () => {
        console.log("Ready!");
    });

    await client.login(process.env.DISCORD_TOKEN);
}

main();
