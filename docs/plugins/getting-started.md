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

:::tip

See the [manifest documentation](/docs/manifest) for more information about the manifest file and
some additional keys you can use.

:::

The plugin template has a `manifest.json` file which contains information about your plugin. You
should edit this file to include the plugin information as well as your information.

The plugin ID should be in
[reverse domain name notation](https://en.wikipedia.org/wiki/Reverse_domain_name_notation). For
example, if your website is `example.com` and your plugin is called `my-plugin`, the plugin ID
should be `com.example.MyPlugin`. If you don't have a website, you can make one up.

:::danger

The plugin ID **cannot** be changed once your plugin is released. Choose wisely!

:::

The version and updater info is used by Replugged to check for updates. The `updater.id` key should
be changed to the username and repository of your plugin. For example, the plugin template is hosted
at https://github.com/replugged-org/plugin-template, so the `updater.id` is
`replugged-org/plugin-template`.

:::warning

Make sure you update the `updater.id` key to your plugin's repository. If you don't, Replugged will
try to update your plugin to the plugin template. Your users will have to uninstall and reinstall
your plugin to fix this.

:::

## Development

The plugin template has a `watch` script which will watch for changes to your plugin and
automatically rebuild it. You can run it with `pnpm run watch`.

After it's initially installed, the watch/build scripts will automatically reload your plugin in
Discord when you make changes. If you don't want it to do this, you can use the `--no-reload` flag
with your command to disable it.

Some plugins will require you to fully reload Discord (<kbd>Ctrl</kbd> + <kbd>R</kbd>) to apply
changes, for example if you are using plaintext patches (we will go over that later).

## Building, updating, and releasing

### Release Tool

The plugin template includes a `release` script which will take care of updating the version number,
committing the changes, tagging the release, and pushing the tag to GitHub. You can run it with
`pnpm run release`. It will prompt you for all the things it needs and will confirm with you before
it pushes anything to GitHub.

### Manual Instructions

:::tip

Using the release tool above is recommended and easier and will work for most plugins. However, if
you need to or would prefer to do it manually, you can follow the instructions below.

:::

1. Update the version number in `manifest.json`. The version number doesn't need to follow any
   specific format, but does need to be changed in order for Replugged to detect an update.If this
   is your first release, you can leave it as `1.0.0`.
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

In order to share your plugin in our [Discord server](https://discord.gg/HnYFUhv4x4), your plugin
will first have to be approved, and then added to our store. For more information on this process
and how to request approval, please see [this page](/docs/store).

### Installing from a link

You can create a link to install your plugin which will automatically open Replugged and prompt the
user to confirm the installation. For example:
https://replugged.dev/install?identifier=replugged-org/plugin-template&source=github.

- `identifier` - same as `updater.id` in the manifest
- `source` - same as `updater.source` in the manifest. Currently, `github` and `store` are
  supported. If your plugin is from the store, this can be omitted.
- `id` - Same as `id` in the manifest. This is only needed if your update source is GitHub **and**
  your release contains multiple plugins. Otherwise, Replugged will automatically detect the plugin
  ID.

#### Button for GitHub readme

You can use your own markdown if you want, but we recommend using the following button:

```md
[![Install in Replugged](https://img.shields.io/badge/-Install%20in%20Replugged-blue?style=for-the-badge&logo=none)](https://replugged.dev/install?identifier=YOUR_ADDON_INFO_HERE&source=github)
```

:::note

Make sure to update the link with your plugin's information.

:::
