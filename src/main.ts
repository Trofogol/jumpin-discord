// IDs of bot
const CLIENT_ID = "";
const BOT_TOKEN = "";

// next code came from welcome page of discord.js

// import section
import { REST } from "@discordjs/rest";
import { Routes } from "discord-api-types/v9";

// Register a slash command against the Discord API:

const commands = [
  {
    name: 'ping',
    description: 'Should answer "pong!"'
  },
  {
    name: 'test',
    description: 'Should answer that it works'
  }];

const rest = new REST({ version: '9' }).setToken(BOT_TOKEN);

(async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(
      Routes.applicationCommands(CLIENT_ID),
      { body: commands },
    );

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();

// Bot

import { Client, Intents, DMChannel, MessagePayload } from 'discord.js';
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
//const dm = new DMChannel(client);

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// note: looks like interaction is a Message object (CommandInteraction)
client.on('interactionCreate', async interaction => {
  // skip non-command
  if (!interaction.isCommand()) return;

  if (interaction.commandName === 'ping') {
    await interaction.reply('Pong!');
  } else if (interaction.commandName === 'test') {
    await interaction.user.send(`Well hello there! I'm alive!`)
    .then((successMessage) => {
      interaction.reply('Got it. Check your DM');
      console.log(`[DEBUG]: I writed DM to user. Got success message from that action:\n${successMessage}\n=====END OF EVENT=====\n`);
    });
  }
});

client.login(BOT_TOKEN);
