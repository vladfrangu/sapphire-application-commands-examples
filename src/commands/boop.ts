import { ApplyOptions } from '@sapphire/decorators';
import { ApplicationCommandRegistry, Args, Command } from '@sapphire/framework';
import { ApplicationCommandType } from 'discord-api-types/v9';
import type { Message } from 'discord.js';

@ApplyOptions<Command.Options>({
	preconditions: ['BoopAllowedUsers']
})
export class Boop extends Command {
	public override async messageRun(message: Message, args: Args) {
		const user = await args.pick('user');

		await message.reply({
			content: `${user} just got booped by ${message.author}`,
			allowedMentions: { users: [...new Set([message.author.id, user.id])] }
		});
	}

	public override async chatInputRun(interaction: Command.ChatInputCommandInteraction) {
		const user = interaction.options.getUser('user_to_boop', true);

		await interaction.reply({
			content: `${user} just got booped by ${interaction.user}`,
			allowedMentions: { users: [...new Set([interaction.user.id, user.id])] }
		});
	}

	public override async contextMenuRun(interaction: Command.ContextMenuCommandInteraction) {
		const user = interaction.isMessageContextMenuCommand() ? interaction.targetMessage.author.id : interaction.targetId;

		await interaction.reply({
			content: `<@${user}> just got booped by ${interaction.user}`,
			allowedMentions: { users: [...new Set([interaction.user.id, user])] }
		});
	}

	public override registerApplicationCommands(registry: ApplicationCommandRegistry) {
		registry.registerChatInputCommand(
			(builder) =>
				builder
					.setName(this.name)
					.setDescription('Boops the specified user')
					.addUserOption((userOptionBuilder) =>
						userOptionBuilder //
							.setName('user_to_boop')
							.setDescription('Who shall be booped today? >:3')
					),
			{
				guildIds: ['737141877803057244']
			}
		);

		registry.registerContextMenuCommand(
			(builder) =>
				builder //
					.setName('Boop user')
					.setType(ApplicationCommandType.User),
			{
				guildIds: ['737141877803057244']
			}
		);

		registry.registerContextMenuCommand(
			(builder) =>
				builder //
					.setName('Boop message author gently')
					.setType(ApplicationCommandType.Message),
			{
				guildIds: ['737141877803057244']
			}
		);
	}
}
