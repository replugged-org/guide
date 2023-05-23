---
sidebar_position: 1
title: Getting Started with Plugins
sidebar_label: Getting Started
description: How to get started developing a plugin for Replugged
---

# Getting Started

## Prerequisites

Plugins are developed in [TypeScript](https://www.typescriptlang.org/). You should have a basic
understanding of TypeScript (and JavaScript) before you start developing a plugin. While you can
develop with just JavaScript, we recommend using TypeScript as it provides a lot of benefits.

Discord is made using [React](https://react.dev/), so you will likely need a basic understanding of
React for your plugin.

You will also need to have [Node.js](https://nodejs.org/), [pnpm](https://pnpm.io/), and
[git](https://git-scm.com/) installed on your computer, as well as a code editor (we recommend
[VSCode](https://code.visualstudio.com/)).

To use and test the plugin, you will need to have [Discord](https://discord.com/download) with
[Replugged](https://replugged.dev/download) installed.

## Creating a plugin

Our [plugin template](https://github.com/replugged-org/plugin-template) has everything you need to
develop and release your plugin. It includes:

- Sample plugin (silences your typing indicator)
- Scripts to build and package your plugin
- GitHub actions to release your plugin when you push a tag
- VSCode workspace settings to format your code

## Installing

1. [Create a copy of the template](https://github.com/replugged-org/plugin-template/generate)
2. Clone your new repository and `cd` into it
3. Install dependencies with `pnpm install`
4. Build the plugin with `pnpm run build`. This will compile the plugin and install it in Replugged.
5. In Replugged settings, go to the Plugins tab and click "Load missing plugins" to load the plugin.

:::danger

Do **not** clone your plugin into the Replugged plugin directory. Otherwise, the build script will
delete the folder with your source code as it attempts to put the compiled plugin in that same
location, and you will lose any local changes.

:::

## Customizing your plugin

The plugin template has a `manifest.json` file which contains information about your plugin. You
should edit this file to include the plugin information as well as your information.

The plugin ID should be in
[reverse domain name notation](https://en.wikipedia.org/wiki/Reverse_domain_name_notation). For
example, if your website is `example.com` and your plugin is called `my-plugin`, the plugin ID
should be `com.example.MyPlugin`. If you don't have a website, you can make one up.

The version and updater info is used by Replugged to check for updates. The `updater.id` key should
be changed to the username and repository of your plugin. For example, the plugin template is hosted
at https://github.com/replugged-org/plugin-template, so the `updater.id` is
`replugged-org/plugin-template`.

:::caution

Make sure you update the `updater.id` key to your plugin's repository. If you don't, Replugged will
try to update your plugin to the plugin template. Your users will have to uninstall and reinstall
your plugin to fix this.

:::

## Development

The plugin template has a `watch` script which will watch for changes to your plugin and
automatically rebuild it. You can run it with `pnpm run watch`.

You can apply your new changes by reloading the plugin in Replugged settings or by reloading
Discord. Some plugins will require you to reload Discord to apply changes, for example if you are
using plaintext patches (we will go over that later).

:::tip

You can reload the plugin from Discord DevTools by running
`replugged.plugins.reload('PLUGIN_ID_HERE')`. `PLUGIN_ID_HERE` should be replaced with your plugin
ID (the one you set in `manifest.json`).

:::

## Development Companion Extension

Replugged v4.3.0 contains support for
[Vencord's dev companion extension](https://marketplace.visualstudio.com/items?itemName=Vendicated.vencord-companion).
It is an extension for VSCode that allows you to test your module finds and plaintext patches
without having to rebuild your plugin and reload your client.

You can find the extension in VSCode's extension store when looking for "Vencord", and after
installing it, it's as simple as pressing the "reconnect" plugin in the Replugged settings.

Your module finds and plaintext patches should now have small texts like "Test Find" and "Test
Patch" above them. Clicking them will show a notification within VSCode with diagnostics about the
result.

:::note

For plaintext patches to work, your patch MUST have a `find`! The extension was not made to parse
patches without them.

```js
export default [
  {
    find: "SOMETHING",
    replacements: [{}],
  },
];
```

:::

## Building, updating, and releasing

1. Update the version number in `manifest.json`. The version number doesn't need to follow any
   specific format, but does need to be changed in order for Replugged to detect an update.

:::note

If this is your first release, you can leave it as `1.0.0`.

:::

2. Commit your changes and push them to GitHub.
3. Create a new tag with `git tag v1.0.0` (replace `1.0.0` with your version number).

:::note

The tag does not necessarily need to be named the same as the version number (although we recommend
doing that to make things simpler), **but it must start with a `v`**. The GitHub action will not run
if the tag does not start with a `v`.

:::

4. Push the tag to GitHub with `git push --tags`.

The GitHub action will automatically build and package your plugin and create a new release. The
release will contain an `.asar` file which contains your plugin. It should also contain a copy of
your manifest file which is used by Replugged to check for updates.

## Sharing your plugin

### Replugged Discord

If you would like to share your plugin in our [discord server](https://discord.gg/replugged), please
ping a staff member in
[#plugin-dev](https://discord.com/channels/1000926524452647132/1000955966520557689) with a link to
your plugin. Once approved, you can post your plugin in the
[#plugin-links](https://discord.com/channels/1000926524452647132/1053466391874900078) channel.

### Installing from a link

You can create a link to install your plugin:
<https://replugged.dev/install?identifier=replugged-org/plugin-template&source=github>. Query
params:

- `identifier` - same as `updater.id` in the manifest
- `source` - same as `updater.source` in the manifest (currently, only `github` is supported)
- `id` - (optional) same as `id` in the manifest. This is only needed if your release contains
  multiple plugins. Otherwise, Replugged will automatically detect the plugin ID.

#### Button for GitHub readme

You can use your own markdown if you want, but we recommend using the following button:

```md
[![Install in Replugged](https://img.shields.io/badge/-Install%20in%20Replugged-blue?style=for-the-badge&logo=none)](https://replugged.dev/install?identifier=YOUR_ADDON_INFO_HERE&source=github)
```

:::note

Make sure to update the link with your plugin's information.

:::
