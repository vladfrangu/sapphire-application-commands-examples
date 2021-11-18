import { config } from 'dotenv';
config();

import '@sapphire/plugin-logger/register';

import { LogLevel, SapphireClient } from '@sapphire/framework';

const client = new SapphireClient({
	intents: ['GUILDS', 'GUILD_MESSAGES'],
	logger: {
		level: LogLevel.Debug
	}
});

await client.login();
