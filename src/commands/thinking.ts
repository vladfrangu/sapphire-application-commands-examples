import { ApplyOptions } from '@sapphire/decorators';
import { Command } from '@sapphire/framework';
import { setTimeout } from 'node:timers/promises';

@ApplyOptions<Command.Options>({
	description: 'Sleeps for 5 seconds...what more do you want?'
})
export class ThinkingCommand extends Command {
	public override registerApplicationCommands(registry: Command.Registry) {
		registry.registerChatInputCommand(
			(builder) =>
				builder //
					.setName(this.name)
					.setDescription(this.description),
			{
				guildIds: ['737141877803057244']
			}
		);
	}

	public override async chatInputRun(interaction: Command.ChatInputCommandInteraction) {
		await interaction.deferReply();

		await setTimeout(5000);

		await interaction.editReply('🥱 Slept 5 seconds for you...');
	}
}
