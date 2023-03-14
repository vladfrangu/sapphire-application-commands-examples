import { ApplicationCommandRegistries, LogLevel, RegisterBehavior, SapphireClient } from '@sapphire/framework';
import { GatewayIntentBits } from 'discord.js';

ApplicationCommandRegistries.setDefaultBehaviorWhenNotIdentical(RegisterBehavior.BulkOverwrite);

const client = new SapphireClient({
	intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent],
	logger: {
		level: LogLevel.Debug
	},
	defaultPrefix: 'slashies.',
	loadMessageCommandListeners: true
});

await client.login('A Very Beautiful Token');
