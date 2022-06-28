import { Command, ApplicationCommandRegistry } from '@sapphire/framework';
import { setTimeout } from 'node:timers/promises';

export class ThinkingCommand extends Command {
	public override async chatInputRun(interaction: Command.ChatInputInteraction) {
		await interaction.deferReply();

		await setTimeout(5000);

		await interaction.editReply('🥱 Slept 5 seconds for you...');
	}

	public override registerApplicationCommands(registry: ApplicationCommandRegistry) {
		registry.registerChatInputCommand((builder) => builder.setName(this.name).setDescription('Sleeps for 5 seconds...what more do you want?'), {
			guildIds: ['737141877803057244'],
			idHints: ['976937274455506974']
		});
	}
}
