const DiscordAPIDocs = (props): JSX.Element => {
  const url = `https://discord.com/developers/docs/${props.link}`;
  return <a href={url}>{props.name}</a>;
};

export default {
  Channel: () => (
    <DiscordAPIDocs name="Channel" link="resources/channel#channel-object-channel-structure" />
  ),
  Embed: () => (
    <DiscordAPIDocs name="Embed" link="resources/channel#embed-object-embed-structure" />
  ),
  Emoji: () => <DiscordAPIDocs name="Emoji" link="resources/emoji#emoji-object-emoji-structure" />,
  Guild: () => <DiscordAPIDocs name="Guild" link="resources/guild#guild-object-guild-structure" />,
  GuildMember: () => (
    <DiscordAPIDocs
      name="GuildMember"
      link="resources/guild#guild-member-object-guild-member-structure"
    />
  ),
  Message: () => (
    <DiscordAPIDocs name="Message" link="resources/channel#message-object-message-structure" />
  ),
  MessageAttachment: () => (
    <DiscordAPIDocs
      name="MessageAttachment"
      link="resources/channel#attachment-object-attachment-structure"
    />
  ),
  Role: () => <DiscordAPIDocs name="Role" link="topics/permissions#role-object-role-structure" />,
  User: () => <DiscordAPIDocs name="User" link="resources/user#user-object-user-structure" />,
};
