---
description: All constants used in the client
---

### Props

| Name             | Type                                | Description                                                                              |
| ---------------- | ----------------------------------- | ---------------------------------------------------------------------------------------- |
| `ChannelTypes`   | Record<string, string \| number>    | Channel types                                                                            |
| `ColorGenerator` | [`ColorGenerator`](#ColorGenerator) | Utility module containing functions useful for generating colors from a given saturation |
| `CSSVariables`   | Record<string, string>              | CSS variables                                                                            |
| `Endpoints`      | Record<string, unknown>             | Endpoints                                                                                |
| `GuildFeatures`  | Record<string, string>              | Guild features                                                                           |
| `Paths`          | Record<string, string>              | Web routes                                                                               |
| `Permissions`    | Record<string, bigint>              | Permissions                                                                              |
| `raw`            | Record<string, unknown>             | Raw module with all constants; check out its contents with Discord DevTools              |
| `Routes`         | Record<string, unknown>             | Routes                                                                                   |
| `RPCCommands`    | Record<string, string>              | RPC commands                                                                             |
| `RPCErrors`      | Record<string, string \| number>    | RPC close codes                                                                          |
| `RPCEvents`      | Record<string, string>              | RPC events                                                                               |
| `Scopes`         | Record<string, string>              | OAuth 2.0 scopes                                                                         |
| `Status`         | Record<string, string>              | User statuses                                                                            |
| `Themes`         | Record<string, string>              | Client themes; alias of `constants.ColorGenerator.themes`                                |
| `UserFlags`      | Record<string, number>              | User flags                                                                               |

### Types {#constants-types}

#### `ColorGenerator` {#ColorGenerator}

<!-- [!]: `Color`, `ShadowColor` and `UnsafeRawColor` aren't documented -->

Example:

In the following example we will generate a color based on the original value of the
`BACKGROUND_PRIMARY` variable but with the saturation multiplied by `2`.

```ts
import { common } from "replugged";
const { constants } = common;
const { ColorGenerator, Themes } = constants;

ColorGenerator.colors.BACKGROUND_PRIMARY.resolve({ theme: Themes.DARK, saturation: 2 });
```

Props:

| Name               | Type                             | Description                                                                                                                    |
| ------------------ | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `colors`           | Record<string, `Color`>          | Contains all CSS variables with the corresponding function to generate a color based on a given saturation                     |
| `radii`            | Record<string, number>           | Contains border-radius values                                                                                                  |
| `shadows`          | Record<string, `ShadowColor`>    | Contains all CSS variables for shadows with the corresponding function to get specific information                             |
| `spacing`          | Record<string, string>           | Contains spacing values                                                                                                        |
| `themes`           | Record<string, string>           | Client themes                                                                                                                  |
| `unsafe_rawColors` | Record<string, `UnsafeRawColor`> | Contains all CSS variables for specific colors with the corresponding function to generate a color based on a given saturation |
