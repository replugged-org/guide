---
sidebar_position: 5
title: Components
description: Documented components for plugins
---

# Components

:::caution

Any components below whose name ends in `Item` already has a `FormItem` wrapper. You should not use
this on those components.

:::

## Category

Example:

```tsx
import { components } from "replugged";
const { Category } = components;

export function Settings(): React.ReactElement {
  return (
    <Category title="Foo" note="This is a description">
      {/* Your setting components here */}
    </Category>
  );
}
```

Props:

| Name        | Type         | Description                                                  |
| ----------- | ------------ | ------------------------------------------------------------ |
| `disabled?` | `boolean`    | Whether the category should be disabled; defaults to `false` |
| `note?`     | `string`     | Description of what the category contains                    |
| `onChange?` | `() => void` | Function ran when the open state is overridden               |
| `open?`     | `boolean`    | Whether the category should be opened; defaults to `false`   |
| `title`     | `string`     | Category's title                                             |

:::caution

It's opened state, by default, is automatically handled by the component. `open` and `onChange` both
must be specified to override.

:::

## Divider

Example:

```tsx
import { components } from "replugged";
const { Divider } = components;

export function Settings(): React.ReactElement {
  return <Divider />;
}
```

Props:

| Name         | Type                  | Description            |
| ------------ | --------------------- | ---------------------- |
| `className?` | `string`              | Component's class name |
| `style?`     | `React.CSSProperties` | Component's style      |

## FormItem

Example:

```tsx
import { components } from "replugged";
const { FormItem } = components;

export function Settings(): React.ReactElement {
  return (
    <FormItem title="Foo" note="This is a description">
      {/* Your setting components here */}
    </FormItem>
  );
}
```

Props:

| Name              | Type                  | Description                                                                               |
| ----------------- | --------------------- | ----------------------------------------------------------------------------------------- |
| `className?`      | `string`              | Component's class name                                                                    |
| `disabled?`       | `boolean`             | Whether the form should be disabled; defaults to `false`                                  |
| `divider?`        | `boolean`             | Whether a divider should be displayed at the end of the form                              |
| `error?`          | `React.ReactNode`     | Form's error message                                                                      |
| `note?`           | `string`              | Description of what the form contains                                                     |
| `noteClassName?`  | `string`              | Note's class name                                                                         |
| `notePosition?`   | `string`              | Whether the note should be displayed before or after the children; defaults to `"before"` |
| `noteStyle?`      | `React.CSSProperties` | Note's style                                                                              |
| `required?`       | `boolean`             | Whether the form completion should be required; defaults to `false`                       |
| `style?`          | `React.CSSProperties` | Component's style                                                                         |
| `tag?`            | `string`              | Form's title tag; defaults to `"h5"`                                                      |
| `title?`          | `React.ReactNode`     | Form's title                                                                              |
| `titleClassName?` | `string`              | Title's class name                                                                        |

## Loader

Example:

```tsx
import { components } from "replugged";
const { Loader } = components;

export function Settings(): React.ReactElement {
  return <Loader type={Loader.Type.WANDERING_CUBES} />;
}
```

Props:

| Name             | Type                  | Description                                               |
| ---------------- | --------------------- | --------------------------------------------------------- |
| `animated?`      | `boolean`             | Whether the loader should be animated; defaults to `true` |
| `className?`     | `string`              | Component's class name                                    |
| `itemClassName?` | `string`              | Class name of all the elements inside the loader          |
| `style?`         | `React.CSSProperties` | Component's style                                         |
| `type?`          | `string`              | Loader type; defaults to `"wanderingCubes"`               |

:::tip

Use `Loader.Type` with `type`!

Types available: `WANDERING_CUBES` | `CHASING_DOTS` | `PULSING_ELLIPSIS` | `SPINNING_CIRCLE` |
`LOW_MOTION`

:::

## Notice

Example:

```tsx
import { components } from "replugged";
const { Notice } = components;

export function Settings(): React.ReactElement {
  return <Notice messageType={Notice.NoticeTypes.POSITIVE}>Notice text</Notice>;
}
```

Props:

| Name           | Type     | Description                                               |
| -------------- | -------- | --------------------------------------------------------- |
| `className?`   | `string` | Component's class name                                    |
| `messageType`  | `number` | Notice type                                               |
| `textColor?`   | `string` | Text color (variable name); defaults to `text-normal`     |
| `textVariant?` | `string` | Text variant (variant name); defaults to `text-sm/medium` |

:::tip

Use `Notice.NoticeTypes` with `messageType`!

Types available: `WARNING` | `INFO` | `ERROR` | `POSITIVE`

:::
