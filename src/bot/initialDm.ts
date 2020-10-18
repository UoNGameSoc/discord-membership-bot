import client from './client';
import { User } from 'discord.js';

/**
 * Message user on server join
 */
client.on('guildMemberAdd', async (member) => {
  console.log(member.displayName, 'joined');
  if (process.env.development) {
    return;
  }

  await member.send(
    `Hey there <@!${
      (member.user as User).id
    }> :wave:\nThanks for joining the GameSoc Discord Server!\nTo get started you need to verify your membership with me.\nPlease respond with your student ID number so I can verify that you are a GameSoc member.\nIf you believe this is in error, or something goes wrong, please contact the committee in <#${
      process.env.discordHelpChannelID as string
    }> for help.\nThanks,\nA GameSoc Bot.`,
  );
});
