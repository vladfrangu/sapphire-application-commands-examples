import { AllFlowsPrecondition } from '@sapphire/framework';
import type { CommandInteraction, ContextMenuCommandInteraction, Message, Snowflake } from 'discord.js';

export class BoopAllowedUsersPrecondition extends AllFlowsPrecondition {
	#message = "This maze wasn't meant for you.";

	public override chatInputRun(interaction: CommandInteraction) {
		return this.doUserCheck(interaction.user.id);
	}

	public override contextMenuRun(interaction: ContextMenuCommandInteraction) {
		return this.doUserCheck(interaction.user.id);
	}

	public override messageRun(message: Message) {
		return this.doUserCheck(message.author.id);
	}

	private doUserCheck(userId: Snowflake) {
		return ['139836912335716352'].includes(userId) ? this.ok() : this.error({ message: this.#message });
	}
}

declare module '@sapphire/framework' {
	interface Preconditions {
		BoopAllowedUsers: never;
	}
}
