import { ApplyOptions } from '@sapphire/decorators';
import { Command } from '@sapphire/framework';
import { setTimeout } from 'node:timers/promises';

@ApplyOptions<Command.Options>({
	description: 'Sleeps for 5 seconds...what more do you want?',
	chatInputCommand: {
		register: true,
		guildIds: ['737141877803057244'],
		idHints: ['976937274455506974']
	}
})
export class ThinkingCommand extends Command {
	public override async chatInputRun(interaction: Command.ChatInputInteraction) {
		await interaction.deferReply();

		await setTimeout(5000);

		await interaction.editReply('🥱 Slept 5 seconds for you...');
	}
}
