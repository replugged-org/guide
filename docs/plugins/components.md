---
sidebar_position: 5
title: Components
description: Documented components for plugins
---

# Components

## Input Components

:::caution

Any components below whose name ends in `Item` already has a `FormItem` (or equivalent) wrapper. You
should not use this on those components.

:::

All components ending with `Item` have their original counterpart, and differ in some props:

| Name        | Type                  | Description                                      |
| ----------- | --------------------- | ------------------------------------------------ |
| `children?` | `React.ReactNode`     | Wrapper component title                          |
| `note?`     | `string`              | Description of what the input component is about |
| `style?`    | `React.CSSProperties` | Wrapper component style                          |

### Button and ButtonItem

Example:

Props:

### Checkbox and CheckboxItem

Example:

```tsx
import { components } from "replugged";
const { CheckboxItem } = components;

export function Settings(): React.ReactElement {
  return <CheckboxItem {...util.useSetting(cfg, "foo", "bar")}>Checkbox title</CheckboxItem>;
}
```

Properties:

| Property  | Description                                                                            |
| --------- | -------------------------------------------------------------------------------------- |
| `.Aligns` | Checkbox aligns. Available properties: <br/>`TOP` \| `CENTER`                          |
| `.Shapes` | Checkbox shapes. Available properties: <br/>`BOX` \| `ROUND` \| `SMALL`                |
| `.Types`  | Checkbox types. Available properties: <br/>`DEFAULT` \| `INVERTED` \| `GHOST` \| `ROW` |

Props:

| Name              | Type                                               | Description                                                             |
| ----------------- | -------------------------------------------------- | ----------------------------------------------------------------------- |
| `align?`          | `string`                                           | Alignment of the elements inside the checkbox; defaults to `"center"`   |
| `checkboxColor?`  | `string`                                           | Checkbox border color                                                   |
| `className?`      | `string`                                           | Component class name                                                    |
| `color?`          | `string`                                           | Checkbox color; defaults to the branding color                          |
| `disabled?`       | `boolean`                                          | Whether the checkbox is disabled; defaults to `false`                   |
| `displayOnly?`    | `boolean`                                          | Whether the checkbox is a static element; defaults to `false`           |
| `innerClassName?` | `string`                                           | Checkbox element class name                                             |
| `onChange?`       | `(e: React.ChangeEvent<HTMLInputElement>) => void` | Function ran on value change                                            |
| `onClick?`        | `(e: React.MouseEvent<HTMLInputElement>) => void`  | Function ran on checkbox click                                          |
| `readOnly?`       | `boolean`                                          | Whether the checkbox is read only; defaults to `false`                  |
| `reverse?`        | `boolean`                                          | Whether the checkbox position is on the right side; defaults to `false` |
| `shape?`          | `string`                                           | Checkbox shape; defaults to `"box"`                                     |
| `size?`           | `number`                                           | Checkbox size; defaults to `24`                                         |
| `style?`          | `React.CSSProperties`                              | Component style                                                         |
| `type?`           | `string`                                           | Checkbox type; defaults to `"default"`                                  |
| `value?`          | `boolean`                                          | Checkbox state; defaults to `false`                                     |

### Radio and RadioItem

Example:

```tsx
import { components } from "replugged";
const { RadioItem } = components;

export function Settings(): React.ReactElement {
  return (
    <RadioItem
      {...util.useSetting(cfg, "foo", "bar")}
      options={[
        {
          name: "Option 1",
          value: "option1",
        },
        {
          name: "Option 2",
          value: "option2",
        },
      ]}>
      Radio title
    </RadioItem>
  );
}
```

Properties:

| Property | Description                                                                              |
| -------- | ---------------------------------------------------------------------------------------- |
| `.Sizes` | Radio group sizes. Available properties: <br/>`NOT_SET` \| `NONE` \| `SMALL` \| `MEDIUM` |

Props:

| Name                         | Type                           | Description                                                 |
| ---------------------------- | ------------------------------ | ----------------------------------------------------------- |
| `className?`                 | `string`                       | Component class name                                        |
| `disabled?`                  | `boolean`                      | Whether the radio group is disabled; defaults to `false`    |
| `itemInfoClassName?`         | `string`                       | Radio info element class name                               |
| `itemTitleClassName?`        | `string`                       | Radio title element class name                              |
| `onChange`                   | `(e: RadioOptionType) => void` | Function ran on value change                                |
| `options`                    | `RadioOptionType[]`            | Array of radio options; check out `RadioOptionType` props   |
| `radioItemClassName?`        | `string`                       | Radio item element class name                               |
| `radioPosition?`             | `string`                       | Radio position; defaults to `"left"`                        |
| `size?`                      | `string`                       | Radio group size; defaults to `"10px"`                      |
| `value?`                     | `string`                       | Selected radio value                                        |
| `withTransparentBackground?` | `boolean`                      | Whether the radio group is transparent; defaults to `false` |

`RadioOptionType` Props:

| Name               | Type      | Description                                                             |
| ------------------ | --------- | ----------------------------------------------------------------------- |
| `name`             | `string`  | Option name                                                             |
| `value`            | `string`  | Option value                                                            |
| `desc?`            | `string`  | Option description                                                      |
| `disabled?`        | `boolean` | Whether the option is disabled; defaults to `false`                     |
| `color?`           | `string`  | Option color                                                            |
| `tooltipText?`     | `string`  | Tooltip text displayed on the option                                    |
| `tooltipPosition?` | `string`  | Tooltip position displayed on the option; check out `Tooltip.Positions` |

### Select and SelectItem

Example:

Props:

### Slider and SliderItem

Example:

```tsx
import { components } from "replugged";
const { SliderItem } = components;

export function Settings(): React.ReactElement {
  return (
    <SliderItem
      {...util.useSetting(cfg, "foo", 0)}
      minValue={0}
      maxValue={100}
      markers={[0, 25, 50, 75, 100]}>
      Slider title
    </SliderItem>
  );
}
```

Props:

| Name                | Type                    | Description                                                                         |
| ------------------- | ----------------------- | ----------------------------------------------------------------------------------- |
| `asValueChanges?`   | `(e: number) => void`   | Function ran on grabber move                                                        |
| `barClassName?`     | `string`                | Bar element class name                                                              |
| `barStyles?`        | `React.CSSProperties`   | Bar element style                                                                   |
| `className?`        | `string`                | Component class name                                                                |
| `defaultValue?`     | `number`                | Default value marked in green                                                       |
| `disabled?`         | `boolean`               | Whether the slider is disabled; defaults to `false`                                 |
| `fillStyles?`       | `React.CSSProperties`   | Bar fill element style                                                              |
| `grabberClassName?` | `string`                | Grabber element class name                                                          |
| `grabberStyles?`    | `React.CSSProperties`   | Grabber element style                                                               |
| `hideBubble?`       | `boolean`               | Whether the tooltip is hidden when `stickToMarkers` is `false`; defaults to `false` |
| `initialValue?`     | `number`                | Initial value the slider grabber is at; alias of `value`; defaults to `10`          |
| `markers?`          | `number[]`              | Array of slider markers                                                             |
| `maxValue?`         | `number`                | Slider maximum value; defaults to `100`                                             |
| `minValue?`         | `number`                | Slider minimum value; defaults to `0`                                               |
| `mini?`             | `boolean`               | Whether the slider grabber is a small dot; defaults to `false`                      |
| `onMarkerRender?`   | `(e: number) => string` | Function ran on marker render, useful to customize markers                          |
| `onChange?`         | `(e: number) => void`   | Function ran on value change                                                        |
| `onValueChange?`    | `(e: number) => void`   | Function ran on value change; alias of `onChange`                                   |
| `onValueRender?`    | `(e: number) => string` | Function ran on value render                                                        |
| `stickToMarkers?`   | `boolean`               | Whether the slider grabber can stick to markers; defaults to `false`                |
| `value?`            | `number`                | Slider value                                                                        |

### Switch and SwitchItem

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
| `onBlur?`        | `(e: React.FocusEvent<HTMLInputElement>) => void`    | Function ran on focus loose                                           |
| `onChange?`      | `(e: string) => void`                                | Function ran on value change                                          |
| `onFocus?`       | `(e: React.FocusEvent<HTMLInputElement>) => void`    | Function ran on focus                                                 |
| `onInvalid?`     | `(e: React.FormEvent<HTMLInputElement>) => void`     | Function ran on invalid submission                                    |
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

| Property | Description                                                     |
| -------- | --------------------------------------------------------------- |
| `.Sizes` | TextInput sizes. Available properties: <br/>`DEFAULT` \| `MINI` |

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
| `onBlur?`         | `(e: React.FocusEvent<HTMLInputElement>) => void`    | Function ran on focus loose                        |
| `onChange?`       | `(e: string) => void`                                | Function ran on value change                       |
| `onFocus?`        | `(e: React.FocusEvent<HTMLInputElement>) => void`    | Function ran on focus                              |
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
| `onChange?` | `() => void` | Function ran on open state change                     |
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

| Property | Description                                                                                                                             |
| -------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `.Type`  | Loader types. Available properties: <br/>`WANDERING_CUBES` \| `CHASING_DOTS` \| `PULSING_ELLIPSIS` \| `SPINNING_CIRCLE` \| `LOW_MOTION` |

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

| Property       | Description                                                                           |
| -------------- | ------------------------------------------------------------------------------------- |
| `.NoticeTypes` | Notice types. Available properties: <br/>`WARNING` \| `INFO` \| `ERROR` \| `POSITIVE` |

Props:

| Name           | Type     | Description                                                 |
| -------------- | -------- | ----------------------------------------------------------- |
| `className?`   | `string` | Component class name                                        |
| `messageType`  | `number` | Notice type                                                 |
| `textColor?`   | `string` | Text color (variable name); defaults to `"text-normal"`     |
| `textVariant?` | `string` | Text variant (variant name); defaults to `"text-sm/medium"` |

### Tooltip

Example:

```tsx
import { components } from "replugged";
const { Tooltip } = components;

<Tooltip text="Tooltip text">{/* Your components here */}</Tooltip>;
```

Properties:

| Property     | Description                                                                                                                      |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------- |
| `.Aligns`    | Tooltip aligns. Available properties: <br/>`TOP` \| `CENTER` \| `BOTTOM` \| `LEFT` \| `RIGHT`                                    |
| `.Colors`    | Tooltip colors. Available properties: <br/>`PRIMARY` \| `BLACK` \| `GREY` \| `BRAND` \| `GREEN` \| `YELLOW` \| `RED` \| `CUSTOM` |
| `.Positions` | Tooltip positions. Available properties: <br/>`TOP` \| `BOTTOM` \| `LEFT` \| `RIGHT` \| `CENTER` \| `WINDOW_CENTER`              |

Props:

| Name                           | Type                             | Description                                                          |
| ------------------------------ | -------------------------------- | -------------------------------------------------------------------- |
| `align?`                       | `string`                         | Tooltip alignment; defaults to `"center"`                            |
| `allowOverflow?`               | `boolean`                        | Whether the tooltip content can overflow; defaults to `false`        |
| `className?`                   | `string`                         | Component class name                                                 |
| `color?`                       | `string`                         | Tooltip color; defaults to `"primary"`                               |
| `delay?`                       | `number`                         | Tooltip spawn delay                                                  |
| `disableTooltipPointerEvents?` | `boolean`                        | Whether the tooltip has pointer events disabled; defaults to `false` |
| `forceOpen?`                   | `boolean`                        | Whether the tooltip is always visible; defaults to `false`           |
| `hide?`                        | `boolean`                        | Whether the tooltip is hidden; defaults to `false`                   |
| `hideOnClick?`                 | `boolean`                        | Whether the tooltip is hidden on click; defaults to `true`           |
| `onAnimationRest?`             | `(e: object, t: object) => void` | Function ran when the tooltip is animating                           |
| `position?`                    | `string`                         | Tooltip position; defaults to `"top"`                                |
| `shouldShow?`                  | `boolean`                        | Whether the tooltip should show; defaults to `true`                  |
| `spacing?`                     | `number`                         | Distance from the children; defaults to `8`                          |
| `style?`                       | `React.CSSProperties`            | Component style                                                      |
| `text`                         | `string`                         | Tooltip text                                                         |
| `tooltipClassName?`            | `string`                         | Tooltip element class name                                           |
| `tooltipContentClassName?`     | `string`                         | Tooltip content element class name                                   |
