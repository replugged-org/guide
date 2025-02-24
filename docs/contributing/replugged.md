---
sidebar_position: 1
title: Contributing to Replugged
description: How to contribute to Replugged itself
---

# Contributing to Replugged

## What needs to be done?

The issues tab has an
"[available](https://github.com/replugged-org/replugged/issues?q=is%3Aissue+is%3Aopen+label%3A%22available+%28leave+comment+to+claim%29%22)"
label for issues that are open for contribution. If you want to contribute, please leave a comment
on the issue you want to work on and we will assign it to you.

We also have a
"[help wanted](https://github.com/replugged-org/replugged/issues?q=is%3Aissue+is%3Aopen+label%3A%22help+wanted%22)"
label for issues that we would like help. If you have ideas for how to solve these issues, or are
able to take them on, please comment on the issue.

If you're looking for something simpler, the
"[good first issue](https://github.com/replugged-org/replugged/labels/good%20first%20issue)" label
has issues that are good to help get acquainted with the codebase.

If there are other improvements you want to work on, feel free to open an issue and we'll assign it
to you.

## How to contribute

### Recommended skills

You will likely not need all of these skills, though it's good to have a basic understanding of them
if possible.

- [Node.js](https://nodejs.org/en)
- [TypeScript](https://typescriptlang.org)
- [React](https://react.dev)
- [Electron](https://electronjs.org)

### Setting up the development environment

#### Prerequisites

Please make sure you have the following installed and are using the correct versions:

- [Git](https://git-scm.com/downloads)
- [Node.js](https://nodejs.org/en/) v18
- [pnpm](https://pnpm.io/installation) v8
- Discord

#### Installation

1. Clone the repository: `git clone https://github.com/replugged-org/replugged` and `cd` into it.
2. Install dependencies: `pnpm install`
3. Build Replugged for development: `pnpm run build`
4. Fully quit Discord
5. Plug into Discord `pnpm run plug`
   - If you want to specify into a specific Discord version, you can add the platform as an
     argument: `pnpm run plug [stable|ptb|canary|development]`
   - If you're currently running in production mode, use `pnpm run replug` instead of
     `pnpm run plug` to unplug your existing version of Replugged
6. Reopen Discord

### Running

When you make changes, you can run `pnpm run build` to build the changes, or use `pnpm run watch` to
automatically rebuild when you edit a file. If you edited a file in the `renderer` folder, you can
reload Discord with <kbd>Ctrl</kbd> + <kbd>R</kbd> or <kbd>Cmd</kbd> + <kbd>R</kbd> to apply your
changes. However, editing files in `main` requires you to fully quit and restart Discord.

### Formatting

This repo is set up to use [Prettier](https://prettier.io/) and [ESLint](https://eslint.org/) to
format code. If you use VSCode, the repo should automatically format your code blocks when you save
the file. You can also run `pnpm run lint:fix` to check for errors and fix them.

We also use
[cSpell](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
to check for spelling errors. If you use VSCode, this is also set up in the recommended extensions
along with Prettier and ESLint and should show you spelling errors as you type. These will also be
checked when you run `pnpm run lint:fix`. If there is a word that cSpell says is an error but is
not, you can add it to [cspell.json](https://github.com/replugged-org/guide/tree/main/cspell.json).
In VSCode, you can do this from the Quick Actions menu (<kbd>Ctrl</kbd> + <kbd>.</kbd> or
<kbd>Cmd</kbd> + <kbd>.</kbd>) or in the right-click menu (under "Spelling").

When creating a PR, these should be checked automatically by GitHub Actions and will fail if there
are formatting errors. If you are a first-time contributor, these might not run until we get to it,
so we recommend running `pnpm run lint:fix` before creating a PR to avoid having to fix formatting
errors later.

## Questions?

If you have any questions, feel free to ask in our [Discord server](https://discord.gg/HnYFUhv4x4)
in the `#replugged-dev` channel.

## Thank you!

Thanks for contributing to Replugged!
