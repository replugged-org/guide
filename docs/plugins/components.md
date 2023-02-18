---
sidebar_position: 5
title: Components
description: Documented components for plugins
---

# Components

## Input Components

:::caution

Any components below whose name ends in `Item` already has a `FormItem` wrapper. You should not use
this on those components.

:::

### Button / ButtonItem

Example:

Props:

### Checkbox / CheckboxItem

Example:

```tsx
import { components } from "replugged";
const { CheckboxItem } = components;

export function Settings(): React.ReactElement {
  return <CheckboxItem {...util.useSetting(cfg, "foo", "bar")}>Checkbox title</CheckboxItem>;
}
```

Properties:

| Property  | Description                                                                                                        |
| --------- | ------------------------------------------------------------------------------------------------------------------ |
| `.Aligns` | Checkbox aligns. Available properties: <ul><li>`TOP`</li><li>`CENTER`</li></ul>                                    |
| `.Shapes` | Checkbox shapes. Available properties: <ul><li>`BOX`</li><li>`ROUND`</li><li>`SMALL`</li></ul>                     |
| `.Types`  | Checkbox types. Available properties: <ul><li>`DEFAULT`</li><li>`INVERTED`</li><li>`GHOST`</li><li>`ROW`</li></ul> |

Props:

| Name              | Type                                               | Description                                                             |
| ----------------- | -------------------------------------------------- | ----------------------------------------------------------------------- |
| `align?`          | `string`                                           | Alignment of the elements inside the checkbox; defaults to `"center"`   |
| `checkboxColor?`  | `string`                                           | Checkbox border color                                                   |
| `className?`      | `string`                                           | Component class name                                                    |
| `color?`          | `string`                                           | Checkbox color; defaults to the default branding color                  |
| `disabled?`       | `boolean`                                          | Whether the checkbox is disabled; defaults to `false`                   |
| `displayOnly?`    | `boolean`                                          | Whether the checkbox is a static element; defaults to `false`           |
| `innerClassName?` | `string`                                           | Checkbox element class name                                             |
| `onChange?`       | `(e: React.ChangeEvent<HTMLInputElement>) => void` | Function ran on checkbox value change                                   |
| `onClick?`        | `(e: React.MouseEvent<HTMLInputElement>) => void`  | Function ran on checkbox click                                          |
| `readOnly?`       | `boolean`                                          | Whether the checkbox is read only; defaults to `false`                  |
| `reverse?`        | `boolean`                                          | Whether the checkbox position is on the right side; defaults to `false` |
| `shape?`          | `string`                                           | Checkbox shape; defaults to `"box"`                                     |
| `size?`           | `number`                                           | Checkbox size; defaults to `24`                                         |
| `style?`          | `React.CSSProperties`                              | Component style                                                         |
| `type?`           | `string`                                           | Checkbox type; defaults to `"default"`                                  |
| `value?`          | `boolean`                                          | Checkbox state; defaults to `false`                                     |

### Radio / RadioItem

Example:

Props:

### Select / SelectItem

Example:

Props:

### Slider / SliderItem

Example:

Props:

### Switch / SwitchItem

Example:

Props:

### TextArea

Example:

```tsx
import { components } from "replugged";
const { FormItem, TextArea } = components;

export function Settings(): React.ReactElement {
  return (
    <FormItem title="Foo">
      <TextArea {...util.useSetting(cfg, "foo", "bar")} />
    </FormItem>
  );
}
```

Props:

| Name             | Type                                                 | Description                                                           |
| ---------------- | ---------------------------------------------------- | --------------------------------------------------------------------- |
| `allowOverflow?` | `boolean`                                            | Whether the input can exceed the maximum length; defaults to `false`  |
| `autoFocus?`     | `boolean`                                            | Whether the input is on focus; defaults to `false`                    |
| `autosize?`      | `boolean`                                            | Whether the input can automatically set its size; defaults to `false` |
| `className?`     | `string`                                             | Component class name                                                  |
| `disabled?`      | `boolean`                                            | Whether the input is disabled; defaults to `false`                    |
| `error?`         | `string`                                             | Input error message if length exceeds limits                          |
| `flex?`          | `boolean`                                            | Whether the input is flexible; defaults to `false`                    |
| `maxLength?`     | `number`                                             | Input maximum length                                                  |
| `minLength?`     | `number`                                             | Input minimum length                                                  |
| `name?`          | `string`                                             | Input element name                                                    |
| `onBlur?`        | `(e: React.FocusEvent<HTMLInputElement>) => void`    | Function ran on input focus loose                                     |
| `onChange?`      | `(e: string) => void`                                | Function ran on input value change                                    |
| `onFocus?`       | `(e: React.FocusEvent<HTMLInputElement>) => void`    | Function ran on input focus                                           |
| `onInvalid?`     | `(e: React.FormEvent<HTMLInputElement>) => void`     | Function ran on input invalid submission                              |
| `onKeyDown?`     | `(e: React.KeyboardEvent<HTMLInputElement>) => void` | Function ran on key press                                             |
| `placeholder?`   | `string`                                             | Input placeholder                                                     |
| `required?`      | `boolean`                                            | Whether the input completion is required                              |
| `resizeable?`    | `boolean`                                            | Whether the input can be resized; defaults to `false`                 |
| `rows?`          | `number`                                             | Input rows; defaults to `3`                                           |
| `value?`         | `string`                                             | Input value                                                           |

### TextInput

Example:

```tsx
import { components } from "replugged";
const { FormItem, TextInput } = components;

export function Settings(): React.ReactElement {
  return (
    <FormItem title="Foo">
      <TextInput {...util.useSetting(cfg, "foo", "bar")} />
    </FormItem>
  );
}
```

Properties:

| Property | Description                                                                       |
| -------- | --------------------------------------------------------------------------------- |
| `.Sizes` | Checkbox aligns. Available properties: <ul><li>`DEFAULT`</li><li>`MINI`</li></ul> |

Props:

| Name              | Type                                                 | Description                                        |
| ----------------- | ---------------------------------------------------- | -------------------------------------------------- |
| `autoFocus?`      | `boolean`                                            | Whether the input is on focus; defaults to `false` |
| `className?`      | `string`                                             | Component class name                               |
| `disabled?`       | `boolean`                                            | Whether the input is disabled; defaults to `false` |
| `editable?`       | `boolean`                                            | Whether the input is editable; defaults to `true`  |
| `error?`          | `string`                                             | Input error message if length exceeds limits       |
| `inputClassName?` | `string`                                             | Input element class name                           |
| `maxLength?`      | `number`                                             | Input maximum length; defaults to `999`            |
| `minLength?`      | `number`                                             | Input minimum length                               |
| `name?`           | `string`                                             | Input element name                                 |
| `onBlur?`         | `(e: React.FocusEvent<HTMLInputElement>) => void`    | Function ran on input focus loose                  |
| `onChange?`       | `(e: string) => void`                                | Function ran on input value change                 |
| `onFocus?`        | `(e: React.FocusEvent<HTMLInputElement>) => void`    | Function ran on input focus                        |
| `onKeyDown?`      | `(e: React.KeyboardEvent<HTMLInputElement>) => void` | Function ran on key press                          |
| `placeholder?`    | `string`                                             | Input placeholder                                  |
| `size?`           | `string`                                             | Input size; defaults to `"default"`                |
| `style?`          | `React.CSSProperties`                                | Component style                                    |
| `type?`           | `React.CSSProperties`                                | Input type; defaults to `"text"`                   |
| `value?`          | `string`                                             | Input value                                        |

## Other Components

### Category

Example:

```tsx
import { components } from "replugged";
const { Category } = components;

<Category title="Foo" note="This is a description">
  {/* Your setting components here */}
</Category>;
```

Props:

| Name        | Type         | Description                                           |
| ----------- | ------------ | ----------------------------------------------------- |
| `disabled?` | `boolean`    | Whether the category is disabled; defaults to `false` |
| `note?`     | `string`     | Description of what the category contains             |
| `onChange?` | `() => void` | Function ran when the open state changes              |
| `open?`     | `boolean`    | Whether the category is opened; defaults to `false`   |
| `title`     | `string`     | Category title                                        |

:::caution

It's opened state, by default, is automatically handled by the component. `open` and `onChange` both
must be specified to override.

:::

### Divider

Example:

```tsx
import { components } from "replugged";
const { Divider } = components;

<Divider />;
```

Props:

| Name         | Type                  | Description          |
| ------------ | --------------------- | -------------------- |
| `className?` | `string`              | Component class name |
| `style?`     | `React.CSSProperties` | Component style      |

### FormItem

Example:

```tsx
import { components } from "replugged";
const { FormItem } = components;

<FormItem title="Foo" note="This is a description">
  {/* Your setting components here */}
</FormItem>;
```

Props:

| Name              | Type                  | Description                                                                        |
| ----------------- | --------------------- | ---------------------------------------------------------------------------------- |
| `className?`      | `string`              | Component class name                                                               |
| `disabled?`       | `boolean`             | Whether the form is disabled; defaults to `false`                                  |
| `divider?`        | `boolean`             | Whether a divider is displayed at the end of the form; defaults to `false`         |
| `error?`          | `React.ReactNode`     | Form error message                                                                 |
| `note?`           | `string`              | Description of what the form contains                                              |
| `noteClassName?`  | `string`              | Note class name                                                                    |
| `notePosition?`   | `string`              | Whether the note is displayed before or after the children; defaults to `"before"` |
| `noteStyle?`      | `React.CSSProperties` | Note style                                                                         |
| `required?`       | `boolean`             | Whether the form completion is required; defaults to `false`                       |
| `style?`          | `React.CSSProperties` | Component style                                                                    |
| `tag?`            | `string`              | Form title tag; defaults to `"h5"`                                                 |
| `title?`          | `React.ReactNode`     | Form title                                                                         |
| `titleClassName?` | `string`              | Title class name                                                                   |

### Loader

Example:

```tsx
import { components } from "replugged";
const { Loader } = components;

<Loader type={Loader.Type.WANDERING_CUBES} />;
```

Properties:

| Property | Description                                                                                                                                                              |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `.Type`  | Loader types. Available properties: <ul><li>`WANDERING_CUBES`</li><li>`CHASING_DOTS`</li><li>`PULSING_ELLIPSIS`</li><li>`SPINNING_CIRCLE`</li><li>`LOW_MOTION`</li></ul> |

Props:

| Name             | Type                  | Description                                        |
| ---------------- | --------------------- | -------------------------------------------------- |
| `animated?`      | `boolean`             | Whether the loader is animated; defaults to `true` |
| `className?`     | `string`              | Component class name                               |
| `itemClassName?` | `string`              | Class name of all the elements inside the loader   |
| `style?`         | `React.CSSProperties` | Component style                                    |
| `type?`          | `string`              | Loader type; defaults to `"wanderingCubes"`        |

### Notice

Example:

```tsx
import { components } from "replugged";
const { Notice } = components;

<Notice messageType={Notice.NoticeTypes.POSITIVE}>Notice text</Notice>;
```

Properties:

| Property       | Type     | Description                                                                                                           |
| -------------- | -------- | --------------------------------------------------------------------------------------------------------------------- |
| `.NoticeTypes` | `Object` | Notice types. All available properties: <ul><li>`WARNING`</li><li>`INFO`</li><li>`ERROR`</li><li>`POSITIVE`</li></ul> |

Props:

| Name           | Type     | Description                                                 |
| -------------- | -------- | ----------------------------------------------------------- |
| `className?`   | `string` | Component class name                                        |
| `messageType`  | `number` | Notice type                                                 |
| `textColor?`   | `string` | Text color (variable name); defaults to `"text-normal"`     |
| `textVariant?` | `string` | Text variant (variant name); defaults to `"text-sm/medium"` |
