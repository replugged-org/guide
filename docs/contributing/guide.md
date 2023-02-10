---
sidebar_position: 2
title: Contributing to the guide
description: How to contribute to this guide
---

# Contributing to the Replugged guide

Thanks for contributing to the Replugged guide! We appreciate your help in making it easier to
develop for Replugged.

## What needs to be done?

The issues tab has an
"[available](https://github.com/replugged-org/guide/issues?q=is%3Aissue+is%3Aopen+label%3A%22available+%28leave+comment+to+claim%29%22)"
label for issues that are open for contribution. If you want to contribute, please leave a comment
on the issue you want to work on and we will assign it to you.

If there are other improvements you want to work on, feel free to open an issue and we'll assign it
to you.

## How to contribute

The Replugged guide is made with [Docusaurus](https://docusaurus.io/). At a base level, each guide
is just a markdown file in the [docs](https://github.com/replugged-org/guide/tree/main/docs) folder.

### Setting up the development environment

After cloning the repository, just install the dependencies with `pnpm install`. That's it! Now you
can run the development server with `pnpm start`. This will start a server on
[localhost:3000](http://localhost:3000) that will automatically reload when you make changes to the
files.

### Creating a new page

To create a new page, just create a new markdown file in the
[docs](https://github.com/replugged-org/guide/tree/main/docs) folder. If your page belongs within a
category, it should go in the folder with the same name as the category. For example, plugin-related
guides should go in the [plugins](https://github.com/replugged-org/guide/tree/main/docs/plugins)
folder.

At the top of the each page, there should be a section like this:

```markdown
---
sidebar_position: 1
title: Getting Started with Plugins
sidebar_label: Getting Started
description: How to get started developing a plugin for Replugged
---
```

You can find out more about writing pages for Docusaurus on
[their website](https://docusaurus.io/docs/create-doc)

### Markdown features

Docusaurus supports some features beyond basic markdown. We recommend looking at their guide
[here](https://docusaurus.io/docs/markdown-features). Looking at the source of other pages is also a
good way to learn how to use these features.

### Formatting

This repo is set up to use [Prettier](https://prettier.io/) and [ESLint](https://eslint.org/) to
format markdown, as well as content in code blocks. If you use VSCode, the repo should automatically
format your code blocks when you save the file. You can also run `pnpm run lint:fix` to check for
errors and fix them.

We also use
[cSpell](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
to check for spelling errors. If you use VSCode, this is also set up in the recommended extensions
along with Prettier and ESLint and should show you spelling errors as you type. These will also be
checked when you run `pnpm run lint:fix`. If there is a word that cSpell says is an error but is
not, you can add it to [cspell.json](https://github.com/replugged-org/guide/tree/main/cspell.json).
In VSCode, you can do this from the Quick Actions menu (Ctrl+.) or in the right-click menu (under
"Spelling").

When creating a PR, these should be checked automatically by GitHub Actions and will fail if there
are formatting errors. If you are a first-time contributor, these might not run until we get to it,
so we recommend running `pnpm run lint:fix` before creating a PR to avoid having to fix formatting
errors later.

## Questions?

If you have any questions, feel free to ask in our [Discord server](https://discord.gg/replugged) in
the `#replugged-core` channel.

## Thank you!

Thanks again for contributing to the Replugged guide!
