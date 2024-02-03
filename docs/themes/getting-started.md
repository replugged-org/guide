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
delete the folder with your source code as it attempts to put the compiled theme in that same
location, and you will lose any local changes.

:::

## Customizing your theme

:::tip

See the [manifest documentation](/docs/manifest) for more information about the manifest file and
some additional keys you can use.

:::

The theme template has a `manifest.json` file which contains information about your theme. You
should edit this file to include the theme information as well as your information.

The theme ID should be in
[reverse domain name notation](https://en.wikipedia.org/wiki/Reverse_domain_name_notation). For
example, if your website is `example.com` and your theme is called `my-theme`, the theme ID should
be `com.example.MyTheme`. If you don't have a website, you can make one up.

:::danger

The theme ID **cannot** be changed once your theme is released. Choose wisely!

:::

The version and updater info is used by Replugged to check for updates. The `updater.id` key should
be changed to the username and repository of your theme. For example, the theme template is hosted
at https://github.com/replugged-org/theme-template, so the `updater.id` is
`replugged-org/theme-template`.

:::warning

Make sure you update the `updater.id` key to your theme's repository. If you don't, Replugged will
try to update your theme to the theme template. Your users will have to uninstall and reinstall your
theme to fix this.

:::

## Development

The theme template has a `watch` script which will watch for changes to your theme and automatically
rebuild it. You can run it with `pnpm run watch`.

After it's initially installed, the watch/build scripts will automatically reload your theme in
Discord when you make changes. If you don't want it to do this, you can use the `--no-reload` flag
with your command to disable it.

## Building, updating, and releasing

### Release Tool

The theme template includes a `release` script which will take care of updating the version number,
committing the changes, tagging the release, and pushing the tag to GitHub. You can run it with
`pnpm run release`. It will prompt you for all the things it needs and will confirm with you before
it pushes anything to GitHub.

### Manual Instructions

:::tip

Using the release tool above is recommended and easier and will work for most themes. However, if
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

The GitHub action will automatically build and package your theme and create a new release. The
release will contain an `.asar` file which contains your theme. It should also contain a copy of
your manifest file which is used by Replugged to check for updates.

## Sharing your theme

### Replugged Discord

In order to share your theme in our [Discord server](https://discord.gg/HnYFUhv4x4), your theme will
first have to be approved, and then added to our store. For more information on this process and how
to request approval, please see [this page](/docs/store).

### Installing from a link

You can create a link to install your theme which will automatically open Replugged and prompt the
user to confirm the installation. For example:
https://replugged.dev/install?identifier=replugged-org/theme-template&source=github.

- `identifier` - same as `updater.id` in the manifest
- `source` - same as `updater.source` in the manifest. Currently, `github` and `store` are
  supported. If your theme is from the store, this can be omitted.
- `id` - Same as `id` in the manifest. This is only needed if your update source is GitHub **and**
  your release contains multiple themes. Otherwise, Replugged will automatically detect the theme
  ID.

#### Button for GitHub readme

You can use your own markdown if you want, but we recommend using the following button:

```md
[![Install in Replugged](https://img.shields.io/badge/-Install%20in%20Replugged-blue?style=for-the-badge&logo=none)](https://replugged.dev/install?identifier=YOUR_ADDON_INFO_HERE&source=github)
```

:::note

Make sure to update the link with your theme's information.

:::
