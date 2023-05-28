import React from "react";

const DiscordAPIDocs = (props): JSX.Element => {
  const url = `https://discord.com/developers/docs/resources/${props.link}`;
  return <a href={url}>{props.name}</a>;
};

export default {
  Channel: () => <DiscordAPIDocs name="Channel" link="channel#channel-object-channel-structure" />,
  Emoji: () => <DiscordAPIDocs name="Emoji" link="emoji#emoji-object-emoji-structure" />,
  Guild: () => <DiscordAPIDocs name="Guild" link="guild#guild-object-guild-structure" />,
  GuildMember: () => (
    <DiscordAPIDocs name="GuildMember" link="guild#guild-member-object-guild-member-structure" />
  ),
  Message: () => <DiscordAPIDocs name="Message" link="channel#message-object-message-structure" />,
  MessageAttachment: () => (
    <DiscordAPIDocs
      name="MessageAttachment"
      link="channel#attachment-object-attachment-structure"
    />
  ),
  User: () => <DiscordAPIDocs name="User" link="user#user-object-user-structure" />,
};
