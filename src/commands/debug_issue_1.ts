import { ApplicationCommandRegistry, Command } from '@sapphire/framework';
import type { CommandInteraction } from 'discord.js';

export class DebugIssue1ByHenning extends Command {
	public override async chatInputRun(interaction: CommandInteraction) {
		return interaction.reply({ ephemeral: true, content: "This maze wasn't meant for you." });
	}

	public override registerApplicationCommands(registry: ApplicationCommandRegistry) {
		registry.registerChatInputCommand(
			(builder) =>
				builder
					.setName('debug_issue_1')
					.setDescription('Debug issue 1; reported by Henning')
					.addIntegerOption((owoLevel) => owoLevel.setName('owo-level').setDescription('How owo of you').setMinValue(69).setMaxValue(420)),
			{
				guildIds: ['737141877803057244']
			}
		);
	}
}
