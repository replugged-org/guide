---
sidebar_position: 1
title: Getting Started with Themes
sidebar_label: Getting Started
description: How to get started developing a theme for Replugged
---

# Getting Started

## Prerequisites

Themes are developed in CSS or [SCSS](https://sass-lang.com/). You should have a basic understanding
of CSS before developing a theme.

You will also need to have [Node.js](https://nodejs.org/), [pnpm](https://pnpm.io/), and
[git](https://git-scm.com/) installed on your computer, as well as a code editor (we recommend
[VSCode](https://code.visualstudio.com/)).

To use and test the theme, you will need to have [Discord](https://discord.com/download) with
[Replugged](https://replugged.dev/download) installed.

## Creating a theme

Our [theme template](https://github.com/replugged-org/theme-template) has everything you need to
develop and release your theme. It includes:

- Sample theme (reverts the Discord font to Whitney)
- Scripts to build and package your theme
- GitHub actions to release your theme when you push a tag
- VSCode workspace settings to format your code

## Installing

1. [Create a copy of the template](https://github.com/replugged-org/theme-template/generate)
2. Clone your new repository and `cd` into it
3. Install dependencies with `pnpm install`
4. Build the theme with `pnpm run build`. This will compile the theme and install it in Replugged.
5. In Replugged settings, go to the Themes tab and click "Load missing themes" to load the theme.

:::danger

Do **not** clone your theme into the Replugged theme directory. Otherwise, the build script will 
delete the folder with your source code as it attempts to put the compiled theme in that same location, 
and you will lose any local changes.

:::

## Customizing your theme

The theme template has a `manifest.json` file which contains information about your theme. You
should edit this file to include the theme information as well as your information.

The theme ID should be in
[reverse domain name notation](https://en.wikipedia.org/wiki/Reverse_domain_name_notation). For
example, if your website is `example.com` and your theme is called `my-theme`, the theme ID should
be `com.example.MyTheme`. If you don't have a website, you can make one up.

The version and updater info is used by Replugged to check for updates. The `updater.id` key should
be changed to the username and repository of your theme. For example, the theme template is hosted
at https://github.com/replugged-org/theme-template, so the `updater.id` is
`replugged-org/theme-template`.

:::caution

Make sure you update the `updater.id` key to your theme's repository. If you don't, Replugged will
try to update your theme to the theme template. Your users will have to uninstall and reinstall your
theme to fix this.

:::

## Development

The theme template has a `watch` script which will watch for changes to your theme and automatically
rebuild it. You can run it with `pnpm run watch`.

You can apply your new changes by reloading the theme in Replugged settings or by reloading Discord.

:::tip

You can reload the theme from Discord DevTools by running
`replugged.themes.reload('THEME_ID_HERE')`. `THEME_ID_HERE` should be replaced with your theme ID
(the one you set in `manifest.json`).

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

The GitHub action will automatically build and package your theme and create a new release. The
release will contain an `.asar` file which contains your theme. It should also contain a copy of
your manifest file which is used by Replugged to check for updates.

## Sharing your theme

### Replugged Discord

If you would like to share your theme in our [discord server](https://discord.gg/replugged), please
ping a staff member in
[#theme-dev](https://discord.com/channels/1000926524452647132/1000955967627874424) with a link to
your theme. Once approved, you can post your theme in the
[#theme-links](https://discord.com/channels/1000926524452647132/1053467493743738961) channel.

### Installing from a link

You can create a link to install your theme:
<https://replugged.dev/install?identifier=replugged-org/theme-template&source=github>. Query params:

- `identifier` - same as `updater.id` in the manifest
- `source` - same as `updater.source` in the manifest (currently, only `github` is supported)
- `id` - (optional) same as `id` in the manifest. This is only needed if your release contains
  multiple themes. Otherwise, Replugged will automatically detect the theme ID.

#### Button for GitHub readme

You can use your own markdown if you want, but we recommend using the following button:

```md
[![Install in Replugged](https://img.shields.io/badge/-Install%20in%20Replugged-blue?style=for-the-badge&logo=none)](https://replugged.dev/install?identifier=YOUR_ADDON_INFO_HERE&source=github)
```

:::note

Make sure to update the link with your plugin's information.

:::
