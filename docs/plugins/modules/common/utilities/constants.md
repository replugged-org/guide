---
description: All constants used in the client
---

### Props

| Name             | Type                                             | Description                                                                              |
| ---------------- | ------------------------------------------------ | ---------------------------------------------------------------------------------------- |
| `ChannelTypes`   | Record\<string,&nbsp;string&nbsp;\|&nbsp;number> | Channel types                                                                            |
| `ColorGenerator` | [`ColorGenerator`](#ColorGenerator)              | Utility module containing functions useful for generating colors from a given saturation |
| `CSSVariables`   | Record\<string,&nbsp;string>                     | CSS variables                                                                            |
| `Endpoints`      | Record\<string,&nbsp;unknown>                    | Endpoints                                                                                |
| `GuildFeatures`  | Record\<string,&nbsp;string>                     | Guild features                                                                           |
| `MessageFlags`   | Record\<string,&nbsp;string>                     | Message flags                                                                            |
| `Paths`          | Record\<string,&nbsp;string>                     | Web routes                                                                               |
| `Permissions`    | Record\<string,&nbsp;bigint>                     | Permissions                                                                              |
| `raw`            | Record\<string,&nbsp;unknown>                    | Raw module with all constants; check out its contents with Discord DevTools              |
| `Routes`         | Record\<string,&nbsp;unknown>                    | Routes                                                                                   |
| `RPCCommands`    | Record\<string,&nbsp;string>                     | RPC commands                                                                             |
| `RPCErrors`      | Record\<string,&nbsp;string \| number>           | RPC close codes                                                                          |
| `RPCEvents`      | Record\<string,&nbsp;string>                     | RPC events                                                                               |
| `Scopes`         | Record\<string,&nbsp;string>                     | OAuth 2.0 scopes                                                                         |
| `Status`         | Record\<string,&nbsp;string>                     | User statuses                                                                            |
| `Themes`         | Record\<string,&nbsp;string>                     | Client themes; alias of `constants.ColorGenerator.themes`                                |
| `UserFlags`      | Record\<string,&nbsp;number>                     | User flags                                                                               |

### Types \{#constants-types}

#### `ColorGenerator` \{#ColorGenerator}

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

| Name               | Type                                   | Description                                                                                                                    |
| ------------------ | -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `colors`           | Record\<string,&nbsp;`Color`>          | Contains all CSS variables with the corresponding function to generate a color based on a given saturation                     |
| `radii`            | Record\<string,&nbsp;number>           | Contains border-radius values                                                                                                  |
| `shadows`          | Record\<string,&nbsp;`ShadowColor`>    | Contains all CSS variables for shadows with the corresponding function to get specific information                             |
| `spacing`          | Record\<string,&nbsp;string>           | Contains spacing values                                                                                                        |
| `themes`           | Record\<string,&nbsp;string>           | Client themes                                                                                                                  |
| `unsafe_rawColors` | Record\<string,&nbsp;`UnsafeRawColor`> | Contains all CSS variables for specific colors with the corresponding function to generate a color based on a given saturation |
