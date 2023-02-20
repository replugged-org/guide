---
sidebar_position: 5
title: Components
description: Documented components for plugins
---

# Components

:::caution

Any components below whose name ends in `Item` already has a `FormItem` (or equivalent) wrapper. You
should not use this on those components.

:::

## Input components

All input components ending with `Item` have their original counterpart, and differ in some props:

| Name        | Type                | Default | Description                                      |
| ----------- | ------------------- | ------- | ------------------------------------------------ |
| `children?` | React.ReactNode     |         | Wrapper component title                          |
| `note?`     | string              |         | Description of what the input component is about |
| `style?`    | React.CSSProperties |         | Wrapper component style                          |

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

| Property  | Description                                                     |
| --------- | --------------------------------------------------------------- |
| `.Aligns` | Checkbox alignments <br/>`TOP` \| `CENTER`                      |
| `.Shapes` | Checkbox shapes <br/>`BOX` \| `ROUND` \| `SMALL`                |
| `.Types`  | Checkbox types <br/>`DEFAULT` \| `INVERTED` \| `GHOST` \| `ROW` |

Props:

| Name              | Type                | Default            | Description                                        |
| ----------------- | ------------------- | ------------------ | -------------------------------------------------- |
| `align?`          | string              | `center`           | Alignment of the elements inside the checkbox      |
| `checkboxColor?`  | string              |                    | Checkbox border color                              |
| `className?`      | string              |                    | Component class name                               |
| `color?`          | string              | `var(--brand-500)` | Checkbox color                                     |
| `disabled?`       | boolean             | `false`            | Whether the checkbox is disabled                   |
| `displayOnly?`    | boolean             | `false`            | Whether the checkbox is a static element           |
| `innerClassName?` | string              |                    | Checkbox element class name                        |
| `onChange?`       | function            |                    | Function ran on value change                       |
| `onClick?`        | function            |                    | Function ran on checkbox click                     |
| `readOnly?`       | boolean             | `false`            | Whether the checkbox is read only                  |
| `reverse?`        | boolean             | `false`            | Whether the checkbox position is on the right side |
| `shape?`          | string              | `box-*`            | Define checkbox shape                              |
| `size?`           | number              | `24`               | Checkbox width and height                          |
| `style?`          | React.CSSProperties |                    | Component style                                    |
| `type?`           | string              | `default`          | Define checkbox type                               |
| `value?`          | boolean             | `false`            | Checkbox state                                     |

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

| Property | Description                                                       |
| -------- | ----------------------------------------------------------------- |
| `.Sizes` | Radio group sizes <br/>`NOT_SET` \| `NONE` \| `SMALL` \| `MEDIUM` |

Props:

| Name                         | Type              | Default | Description                                               |
| ---------------------------- | ----------------- | ------- | --------------------------------------------------------- |
| `className?`                 | string            |         | Component class name                                      |
| `disabled?`                  | boolean           | `false` | Whether the radio group is disabled                       |
| `itemInfoClassName?`         | string            |         | Radio info element class name                             |
| `itemTitleClassName?`        | string            |         | Radio title element class name                            |
| `onChange`                   | function          |         | Function ran on value change                              |
| `options`                    | RadioOptionType[] |         | Array of radio options; check out `RadioOptionType` props |
| `radioItemClassName?`        | string            |         | Radio item element class name                             |
| `radioPosition?`             | string            | `left`  | Position of the radio                                     |
| `size?`                      | string            | `10px`  | Define radio group size                                   |
| `value?`                     | string            |         | Selected radio value                                      |
| `withTransparentBackground?` | boolean           | `false` | Whether the radio group is transparent                    |

`RadioOptionType` Props:

| Name               | Type    | Default | Description                                                             |
| ------------------ | ------- | ------- | ----------------------------------------------------------------------- |
| `color?`           | string  |         | Color displayed on the side                                             |
| `desc?`            | string  |         | Option description                                                      |
| `disabled?`        | boolean | `false` | Whether the option is disabled                                          |
| `name`             | string  |         | Option name                                                             |
| `tooltipPosition?` | string  |         | Tooltip position displayed on the option; check out `Tooltip.Positions` |
| `tooltipText?`     | string  |         | Tooltip text displayed on the option                                    |
| `value`            | string  |         | Option value                                                            |

### Select and SelectItem

Example:

```tsx
import { components } from "replugged";
const { SelectItem } = components;

export function Settings(): React.ReactElement {
  return (
    <SelectItem
      {...util.useSetting(cfg, "foo", "bar")}
      options={[
        {
          label: "Option 1",
          value: "option1",
        },
        {
          label: "Option 2",
          value: "option2",
        },
      ]}>
      Select title
    </SelectItem>
  );
}
```

Props:

| Name                 | Type               | Default  | Description                                                                                                 |
| -------------------- | ------------------ | -------- | ----------------------------------------------------------------------------------------------------------- |
| `autoFocus?`         | boolean            | `false`  | Whether the select is on focus                                                                              |
| `className?`         | string             |          | Component class name                                                                                        |
| `clear?`             | function           |          | Function ran when the selection is cleared; works together with `clearable`; alias of `onClear`             |
| `clearable?`         | boolean            | `false`  | Whether the selection is clearable from its button; works together with `clear`                             |
| `closeOnSelect?`     | boolean            | `true`   | Whether to close the popout once selected an option                                                         |
| `disabled?`          | boolean            | `false`  | Whether the select is disabled; alias of `isDisabled`                                                       |
| `hideIcon?`          | boolean            | `false`  | Whether the arrow icon is hidden                                                                            |
| `isDisabled?`        | boolean            | `false`  | Whether the select is disabled; alias of `disabled`                                                         |
| `isSelected`         | function           |          | Function ran to check if the option passed as a parameter is selectable; not necessary if `value` is passed |
| `look?`              | number             | `0`      | Define the select style                                                                                     |
| `maxVisibleItems?`   | number             | `7`      | How many options are visible                                                                                |
| `onChange`           | function           |          | Function ran on selection change; alias of `onSelect` and `select`                                          |
| `onClear?`           | function           |          | Function ran when the selection is cleared; works together with `clearable`; alias of `clear`               |
| `onClose?`           | function           |          | Function ran when the popout got closed                                                                     |
| `onOpen?`            | function           |          | Function ran when the popout got opened                                                                     |
| `onSelect`           | function           |          | Function ran on selection change; alias of `onChange` and `select`                                          |
| `optionClassName?`   | string             |          | Option element class name                                                                                   |
| `options`            | SelectOptionType[] |          | Array of select options; check out `SelectOptionType` props                                                 |
| `placeholder?`       | string             | `Select` | Select placeholder text                                                                                     |
| `popoutClassName?`   | string             |          | Popout element class name                                                                                   |
| `popoutPosition?`    | string             |          | Popout position displayed on the select; check out `Tooltip.Positions`                                      |
| `popoutWidth?`       | number             |          | Popout width                                                                                                |
| `renderOptionLabel?` | function           |          | Function ran on option label element render, useful to labels                                               |
| `renderOptionValue?` | function           |          | Function ran on option value element render, useful to values                                               |
| `select`             | function           |          | Function ran on selection change; alias of `onChange` and `onSelect`                                        |
| `serialize?`         | function           |          | Function ran to serialize the option                                                                        |
| `value?`             | string             |          | Selected option value                                                                                       |

`SelectOptionType` Props:

| Name        | Type    | Default | Description                    |
| ----------- | ------- | ------- | ------------------------------ |
| `disabled?` | boolean | `false` | Whether the option is disabled |
| `key?`      | string  |         | Option key                     |
| `label`     | string  |         | Option name                    |
| `value`     | string  |         | Option value                   |

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

| Name                | Type                | Default | Description                                                        |
| ------------------- | ------------------- | ------- | ------------------------------------------------------------------ |
| `asValueChanges?`   | function            |         | Function ran on grabber move                                       |
| `barClassName?`     | string              |         | Bar element class name                                             |
| `barStyles?`        | React.CSSProperties |         | Bar element style                                                  |
| `className?`        | string              |         | Component class name                                               |
| `defaultValue?`     | number              |         | Default value, marked in green                                     |
| `disabled?`         | boolean             | `false` | Whether the slider is disabled                                     |
| `equidistant?`      | boolean             | `false` | Whether the markers are equidistant from each other                |
| `fillStyles?`       | React.CSSProperties |         | Bar fill element style                                             |
| `grabberClassName?` | string              |         | Grabber element class name                                         |
| `grabberStyles?`    | React.CSSProperties |         | Grabber element style                                              |
| `hideBubble?`       | boolean             | `false` | Whether the tooltip is hidden when `stickToMarkers` is `false`     |
| `initialValue?`     | number              | `10`    | Initial value the slider grabber is at; alias of `value`           |
| `markers?`          | number[]            |         | Array of slider markers                                            |
| `keyboardStep?`     | number              | `1`     | By how much the slider grabber has to move if the keyboard is used |
| `maxValue?`         | number              | `100`   | Slider maximum value                                               |
| `minValue?`         | number              | `0`     | Slider minimum value                                               |
| `mini?`             | boolean             | `false` | Whether the slider grabber is a small dot                          |
| `onMarkerRender?`   | function            |         | Function ran on marker render, useful to customize markers         |
| `onChange?`         | function            |         | Function ran on value change                                       |
| `onValueChange?`    | function            |         | Function ran on value change; alias of `onChange`                  |
| `onValueRender?`    | function            |         | Function ran on value render , useful to customize values          |
| `stickToMarkers?`   | boolean             | `false` | Whether the slider grabber can stick to markers                    |
| `value?`            | number              |         | Slider value                                                       |

### Switch and SwitchItem

Example:

```tsx
import { components } from "replugged";
const { SwitchItem } = components;

export function Settings(): React.ReactElement {
  return <SwitchItem {...util.useSetting(cfg, "foo", true)}>Switch title</SwitchItem>;
}
```

Props:

| Name           | Type                | Default | Description                                                      |
| -------------- | ------------------- | ------- | ---------------------------------------------------------------- |
| `checked`      | boolean             |         | Switch state; use `value` with the Item component instead        |
| `className?`   | string              |         | Component class name                                             |
| `disabled?`    | boolean             | `false` | Whether the switch is disabled                                   |
| `hideBorder?`  | boolean             | `false` | Whether a divider is not displayed at the end of the switch item |
| `note?`        | string              |         | Description of what the switch item is about                     |
| `onChange`     | function            |         | Function ran on state change                                     |
| `style?`       | React.CSSProperties |         | Component style                                                  |
| `tooltipNote?` | string              |         | Tooltip text displayed on the switch item                        |
| `value`        | boolean             |         | Switch item value                                                |

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

| Name             | Type     | Default | Description                                      |
| ---------------- | -------- | ------- | ------------------------------------------------ |
| `allowOverflow?` | boolean  | `false` | Whether the input can exceed the maximum length  |
| `autoFocus?`     | boolean  | `false` | Whether the input is on focus                    |
| `autosize?`      | boolean  | `false` | Whether the input can automatically set its size |
| `className?`     | string   |         | Component class name                             |
| `disabled?`      | boolean  | `false` | Whether the input is disabled                    |
| `error?`         | string   |         | Error message displayed if length exceeds limits |
| `flex?`          | boolean  | `false` | Whether the input is flexible                    |
| `maxLength?`     | number   |         | Value maximum length                             |
| `minLength?`     | number   |         | Value minimum length                             |
| `name?`          | string   |         | Input element name                               |
| `onBlur?`        | function |         | Function ran on focus loose                      |
| `onChange?`      | function |         | Function ran on value change                     |
| `onFocus?`       | function |         | Function ran on focus                            |
| `onInvalid?`     | function |         | Function ran on invalid submission               |
| `onKeyDown?`     | function |         | Function ran on key press                        |
| `placeholder?`   | string   |         | Input placeholder text                           |
| `required?`      | boolean  | `false` | Whether the input completion is required         |
| `resizeable?`    | boolean  | `false` | Whether the input can be resized                 |
| `rows?`          | number   | `3`     | Define the number of rows the input has          |
| `value?`         | string   |         | Input value                                      |

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

| Property | Description                          |
| -------- | ------------------------------------ |
| `.Sizes` | Input sizes <br/>`DEFAULT` \| `MINI` |

Props:

| Name              | Type                | Default   | Description                                      |
| ----------------- | ------------------- | --------- | ------------------------------------------------ |
| `autoFocus?`      | boolean             | `false`   | Whether the input is on focus                    |
| `className?`      | string              |           | Component class name                             |
| `disabled?`       | boolean             | `false`   | Whether the input is disabled                    |
| `editable?`       | boolean             | `true`    | Whether the input is editable                    |
| `error?`          | string              |           | Error message displayed if length exceeds limits |
| `inputClassName?` | string              |           | Input element class name                         |
| `maxLength?`      | number              | `999`     | Value maximum length                             |
| `minLength?`      | number              |           | Value minimum length                             |
| `name?`           | string              |           | Input element name                               |
| `onBlur?`         | function            |           | Function ran on focus loose                      |
| `onChange?`       | function            |           | Function ran on value change                     |
| `onFocus?`        | function            |           | Function ran on focus                            |
| `onKeyDown?`      | function            |           | Function ran on key press                        |
| `placeholder?`    | string              |           | Input placeholder text                           |
| `size?`           | string              | `default` | Define the input size                            |
| `style?`          | React.CSSProperties |           | Component style                                  |
| `type?`           | string              | `text`    | Define the input type                            |
| `value?`          | string              |           | Input value                                      |

## Other components

### Button and ButtonItem

Example:

```tsx
import { components } from "replugged";
const { ButtonItem } = components;

<ButtonItem button="Button text" onClick={() => console.log("Pressed!")}>
  Title
</ButtonItem>;
```

Properties:

| Property        | Description                                                                                                                                         |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `.BorderColors` | Button border colors <br/>`BRAND` \| `RED` \| `GREEN` \| `YELLOW` \| `PRIMARY` \| `LINK` \| `WHITE` \| `BLACK` \| `TRANSPARENT` \| `BRAND_NEW`      |
| `.Colors`       | Button colors <br/>`BRAND` \| `RED` \| `GREEN` \| `YELLOW` \| `PRIMARY` \| `LINK` \| `WHITE` \| `BLACK` \| `TRANSPARENT` \| `BRAND_NEW` \| `CUSTOM` |
| `.Hovers`       | Button color hovers <br/>`DEFAULT` \| `BRAND` \| `RED` \| `GREEN` \| `YELLOW` \| `PRIMARY` \| `LINK` \| `WHITE` \| `BLACK` \| `TRANSPARENT`         |
| `.Looks`        | Button looks <br/>`FILLED` \| `INVERTED` \| `OUTLINED` \| `LINK` \| `BLANK`                                                                         |
| `.Sizes`        | Button sizes <br/>`NONE` \| `TINY` \| `SMALL` \| `MEDIUM` \| `LARGE` \| `XLARGE` \| `MIN` \| `MAX` \| `ICON`                                        |

Props:

| Name                       | Type                | Default            | Description                                                                                  |
| -------------------------- | ------------------- | ------------------ | -------------------------------------------------------------------------------------------- |
| `borderColor?`             | string              |                    | Button border color                                                                          |
| `button`                   | string              |                    | Button text for the item component                                                           |
| `className?`               | string              |                    | Component class name                                                                         |
| `color?`                   | string              | `colorBrand-*`     | Button color                                                                                 |
| `disabled?`                | boolean             | `false`            | Whether the button is disabled                                                               |
| `fullWidth?`               | boolean             | `false`            | Whether the button width is at maximum                                                       |
| `grow?`                    | boolean             | `true`             | Whether the button size can grow                                                             |
| `hideBorder?`              | boolean             | `false`            | Whether a divider is not displayed at the end of the button item                             |
| `hover?`                   | string              |                    | Button hover color                                                                           |
| `innerClassName?`          | string              |                    | Text element class name                                                                      |
| `look?`                    | string              | `lookFilled-*`     | Button look                                                                                  |
| `note?`                    | string              |                    | Description of what the button item is about                                                 |
| `onClick`                  | function            |                    | Function ran on button click                                                                 |
| `onDoubleClick?`           | function            |                    | Function ran on double button click                                                          |
| `onKeyDown?`               | function            |                    | Function ran on key press                                                                    |
| `onMouseDown?`             | function            |                    | Function ran on mouse down                                                                   |
| `onMouseEnter?`            | function            |                    | Function ran on mouse enter                                                                  |
| `onMouseLeave?`            | function            |                    | Function ran on mouse leave                                                                  |
| `onMouseUp?`               | function            |                    | Function ran on mouse up                                                                     |
| `size?`                    | string              | `sizeMedium-*`     | Button size                                                                                  |
| `style?`                   | React.CSSProperties |                    | Component style                                                                              |
| `submitting?`              | boolean             | `false`            | Whether to display a loader inside the button; works together with `disabled` set to `false` |
| `submittingFinishedLabel?` | string              | `Loading finished` | Announce finish loading message for screen-reader users; works together with `submitting`    |
| `submittingStartedLabel?`  | string              | `Loading`          | Announce start loading message for screen-reader users; works together with `submitting`     |
| `success?`                 | boolean             | `false`            | Whether the button color is green                                                            |
| `tooltipPosition?`         | string              |                    | Tooltip position displayed on the button item; check out `Tooltip.Positions`                 |
| `tooltipText?`             | string              |                    | Tooltip text displayed on the button item                                                    |
| `type?`                    | string              | `button`           | Button element type                                                                          |
| `wrapperClassName?`        | string              |                    | Wrapper element class name                                                                   |

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

| Name        | Type     | Default | Description                                        |
| ----------- | -------- | ------- | -------------------------------------------------- |
| `disabled?` | boolean  | `false` | Whether the category and its children are disabled |
| `note?`     | string   |         | Description of what the category contains          |
| `onChange?` | function |         | Function ran on open state change                  |
| `open?`     | boolean  | `false` | Whether the category is opened                     |
| `title`     | string   |         | Category title                                     |

:::caution

It's opened state, by default, is automatically handled by the component. `open` and `onChange` both
must be specified to override.

:::

### Clickable

Example:

```tsx
import { components } from "replugged";
const { Clickable } = components;

<Clickable onClick={() => console.log("Clicked!")}>{/* Your components here */}</Clickable>;
```

Props:

| Name         | Type                | Default  | Description                              |
| ------------ | ------------------- | -------- | ---------------------------------------- |
| `className?` | string              |          | Component class name                     |
| `onClick?`   | function            |          | Function ran when clicking the component |
| `role?`      | string              | `button` | Define the element role                  |
| `style?`     | React.CSSProperties |          | Component style                          |
| `tabIndex?`  | number              | `0`      | Tab index                                |
| `tag?`       | string              | `div`    | Define the element type                  |

### ContextMenu

<!-- TODO: add doc page reference for common modules (https://github.com/replugged-org/guide/issues/3) -->

:::info

ContextMenu is still a work in progress.

:::

### Divider

Example:

```tsx
import { components } from "replugged";
const { Divider } = components;

<Divider />;
```

Props:

| Name         | Type                | Default | Description          |
| ------------ | ------------------- | ------- | -------------------- |
| `className?` | string              |         | Component class name |
| `style?`     | React.CSSProperties |         | Component style      |

### ErrorBoundary

Example:

```tsx
import { components } from "replugged";
const { ErrorBoundary } = components;

<ErrorBoundary>{/* Your components here */}</ErrorBoundary>;
```

Props:

| Name        | Type            | Default | Description                               |
| ----------- | --------------- | ------- | ----------------------------------------- |
| `fallback?` | React.ReactNode |         | Fallback elements to show                 |
| `onError?`  | function        |         | Function ran when an error is triggered   |
| `silent?`   | boolean         | `false` | Whether to not print the error to console |

### Flex

Example:

```tsx
import { components } from "replugged";
const { Flex } = components;

<Flex direction={Flex.Direction.VERTICAL}>{/* Your components here */}</Flex>;
```

Related Components:

| Component | Description                           |
| --------- | ------------------------------------- |
| `.Child`  | Flex child, useful together with Flex |

Properties:

| Property     | Description                                                                     |
| ------------ | ------------------------------------------------------------------------------- |
| `.Align`     | Flexbox alignments <br/>`START` \| `END` \| `CENTER` \| `STRETCH` \| `BASELINE` |
| `.Direction` | Flexbox directions <br/>`VERTICAL` \| `HORIZONTAL` \| `HORIZONTAL_REVERSE`      |
| `.Justify`   | Flexbox justifies <br/>`START` \| `END` \| `CENTER` \| `BETWEEN` \| `AROUND`    |
| `.Wrap`      | Flexbox wraps <br/>`NO_WRAP` \| `WRAP` \| `WRAP_REVERSE`                        |

Props:

| Name         | Type                | Default          | Description       |
| ------------ | ------------------- | ---------------- | ----------------- |
| `align?`     | string              | `alignStretch-*` | Flexbox align     |
| `basis?`     | string              | `auto`           | Flexbox basis     |
| `direction?` | string              | `horizontal-*`   | Flexbox direction |
| `grow?`      | number              | `1`              | Flexbox grow      |
| `justify?`   | string              | `justifyStart-*` | Flexbox justify   |
| `shrink?`    | number              | `1`              | Flexbox shrink    |
| `style?`     | React.CSSProperties |                  | Component style   |
| `wrap?`      | string              | `noWrap-*`       | Flexbox wrap      |

`.Child` Props:

| Name      | Type                | Default | Description                  |
| --------- | ------------------- | ------- | ---------------------------- |
| `basis?`  | string              | `auto`  | Flexbox basis                |
| `grow?`   | number              | `1`     | Flexbox grow                 |
| `shrink?` | number              | `1`     | Flexbox shrink               |
| `style?`  | React.CSSProperties |         | Component style              |
| `wrap?`   | boolean             | `false` | Whether to wrap its children |

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

| Name              | Type                | Default  | Description                                                |
| ----------------- | ------------------- | -------- | ---------------------------------------------------------- |
| `className?`      | string              |          | Component class name                                       |
| `disabled?`       | boolean             | `false`  | Whether the form is disabled                               |
| `divider?`        | boolean             | `false`  | Whether a divider is displayed at the end of the form      |
| `error?`          | React.ReactNode     |          | Error message displayed                                    |
| `note?`           | string              |          | Description of what the form contains                      |
| `noteClassName?`  | string              |          | Note class name                                            |
| `notePosition?`   | string              | `before` | Whether the note is displayed before or after the children |
| `noteStyle?`      | React.CSSProperties |          | Note style                                                 |
| `required?`       | boolean             | `false`  | Whether the form completion is required                    |
| `style?`          | React.CSSProperties |          | Component style                                            |
| `tag?`            | string              | `h5`     | Define the form title tag                                  |
| `title?`          | React.ReactNode     |          | Form title                                                 |
| `titleClassName?` | string              |          | Title class name                                           |

### FormText

Example:

```tsx
import { components } from "replugged";
const { FormText } = components;

<FormText.DEFAULT>This is an example</FormText.DEFAULT>;
```

Related Components:

| Component            | Description            |
| -------------------- | ---------------------- |
| `.DEFAULT`           | Type `default`         |
| `.INPUT_PLACEHOLDER` | Type `placeholder`     |
| `.DESCRIPTION`       | Type `description`     |
| `.LABEL_BOLD`        | Type `labelBold`       |
| `.LABEL_SELECTED`    | Type `labelSelected`   |
| `.LABEL_DESCRIPTOR`  | Type `labelDescriptor` |
| `.ERROR`             | Type `error`           |
| `.SUCCESS`           | Type `success`         |

Props:

| Name          | Type                | Default   | Description                    |
| ------------- | ------------------- | --------- | ------------------------------ |
| `className?`  | string              |           | Component class name           |
| `disabled?`   | boolean             | `false`   | Whether the text is disabled   |
| `selectable?` | boolean             | `false`   | Whether the text is selectable |
| `style?`      | React.CSSProperties |           | Component style                |
| `type?`       | string              | `default` | Define type of text            |

### Loader

Example:

```tsx
import { components } from "replugged";
const { Loader } = components;

<Loader type={Loader.Type.WANDERING_CUBES} />;
```

Properties:

| Property | Description                                                                                                      |
| -------- | ---------------------------------------------------------------------------------------------------------------- |
| `.Type`  | Loader types <br/>`WANDERING_CUBES` \| `CHASING_DOTS` \| `PULSING_ELLIPSIS` \| `SPINNING_CIRCLE` \| `LOW_MOTION` |

Props:

| Name             | Type                | Default          | Description                                      |
| ---------------- | ------------------- | ---------------- | ------------------------------------------------ |
| `animated?`      | boolean             | `true`           | Whether the loader is animated                   |
| `className?`     | string              |                  | Component class name                             |
| `itemClassName?` | string              |                  | Class name of all the elements inside the loader |
| `style?`         | React.CSSProperties |                  | Component style                                  |
| `type?`          | string              | `wanderingCubes` | Define type of loader                            |

### Modal

Example:

```tsx
import { common, components } from "replugged";
const { modal } = common;
const { Modal } = components;

modal.openModal((props) => (
  <Modal.ModalRoot {...props}>
    <Modal.ModalHeader>{/* Your components for the header here */}</Modal.ModalHeader>
    <Modal.ModalContent>{/* Your components here */}</Modal.ModalContent>
    <Modal.ModalFooter>{/* Your components for the footer here */}</Modal.ModalFooter>
  </Modal.ModalRoot>
));
```

<!-- TODO: add doc page reference for common modules (https://github.com/replugged-org/guide/issues/3) -->

Related Components:

| Component           | Description            |
| ------------------- | ---------------------- |
| `.ModalCloseButton` | Close button component |
| `.ModalContent`     | Contains the content   |
| `.ModalFooter`      | Contains the footer    |
| `.ModalHeader`      | Contains the header    |
| `.ModalRoot`        | Root component         |

`.ModalCloseButton` Props:

| Name                    | Type     | Default | Description                                              |
| ----------------------- | -------- | ------- | -------------------------------------------------------- |
| `className?`            | string   |         | Component class name                                     |
| `hideOnFullscreen?`     | boolean  | `false` | Whether the button is hidden when modal is in fullscreen |
| `onClick`               | function |         | Function ran when clicking the close button              |
| `withCircleBackground?` | boolean  | `false` | Whether the button is in a circle                        |

`.ModalFooter` Props:

| Name         | Type   | Default               | Description          |
| ------------ | ------ | --------------------- | -------------------- |
| `align?`     | string | `alignStretch-*`      | Flexbox align        |
| `className?` | string |                       | Component class name |
| `direction?` | string | `horizontalReverse-*` | Flexbox direction    |
| `justify?`   | string | `justifyStart-*`      | Flexbox justify      |
| `wrap?`      | string | `noWrap-*`            | Flexbox wrap         |

`.ModalHeader` Props:

| Name         | Type   | Default          | Description          |
| ------------ | ------ | ---------------- | -------------------- |
| `align?`     | string | `alignCenter-*`  | Flexbox align        |
| `className?` | string |                  | Component class name |
| `direction?` | string | `horizontal-*`   | Flexbox direction    |
| `justify?`   | string | `justifyStart-*` | Flexbox justify      |
| `wrap?`      | string | `noWrap-*`       | Flexbox wrap         |

`.ModalRoot` Props:

| Name               | Type     | Default  | Description                                   |
| ------------------ | -------- | -------- | --------------------------------------------- |
| `className?`       | string   |          | Component class name                          |
| `onAnimationEnd?`  | function |          | Function ran when the modal stopped animating |
| `role?`            | string   | `dialog` | Modal element role                            |
| `size?`            | string   | `small`  | Modal size                                    |
| `transitionState?` | string   |          | Modal state                                   |

### Notice

Example:

```tsx
import { components } from "replugged";
const { Notice } = components;

<Notice messageType={Notice.Types.POSITIVE}>Notice text</Notice>;
```

Properties:

| Property | Description                                                    |
| -------- | -------------------------------------------------------------- |
| `.Types` | Notice types <br/>`WARNING` \| `INFO` \| `ERROR` \| `POSITIVE` |

Props:

| Name           | Type   | Default          | Description                 |
| -------------- | ------ | ---------------- | --------------------------- |
| `className?`   | string |                  | Component class name        |
| `messageType`  | number |                  | Define type of notice       |
| `textColor?`   | string | `text-normal`    | Text color (variable name)  |
| `textVariant?` | string | `text-sm/medium` | Text variant (variant name) |

### Text

Example:

```tsx
import { components } from "replugged";
const { Text } = components;

<Text.Normal>This is an example</Text.Normal>;
```

Related Components:

| Component  | Description                                |
| ---------- | ------------------------------------------ |
| `.Eyebrow` | Variant `eyebrow`                          |
| `.H1`      | Variant `heading-xl/bold` and tag `h1`     |
| `.H2`      | Variant `heading-lg/semibold` and tag `h2` |
| `.H3`      | Variant `heading-md/bold` and tag `h3`     |
| `.H4`      | Variant `heading-sm/bold` and tag `h4`     |
| `.Normal`  | Variant `text-sm/normal` and tag `span`    |

Props:

| Name                    | Type                | Default | Description                                                             |
| ----------------------- | ------------------- | ------- | ----------------------------------------------------------------------- |
| `allowMarkdownHeading?` | boolean             | `false` | Whether markdown headings are displayed; works together with `markdown` |
| `allowMarkdownLinks?`   | boolean             | `false` | Whether markdown links are displayed; works together with `markdown`    |
| `allowMarkdownList?`    | boolean             | `false` | Whether markdown lists are displayed; works together with `markdown`    |
| `className?`            | string              |         | Component class name                                                    |
| `color?`                | string              |         | Text color (variable name)                                              |
| `lineClamp?`            | number              |         | How many lines to clamp                                                 |
| `markdown?`             | boolean             | `false` | Whether the text is markdown compatible                                 |
| `selectable?`           | boolean             | `false` | Whether the text is selectable                                          |
| `style?`                | React.CSSProperties |         | Component style                                                         |
| `tabularNumbers?`       | boolean             | `false` | Whether the text font supports tabular numbers                          |
| `tag?`                  | string              | `div`   | Define the text element tag                                             |
| `variant?`              | string              |         | Text variant (variant name)                                             |

:::tip

You can see all the different text variants with Discord's Text Components page, available with the
developer settings enabled.

:::

### Tooltip

Example:

```tsx
import { components } from "replugged";
const { Tooltip } = components;

<Tooltip text="Tooltip text">{/* Your components here */}</Tooltip>;
```

Properties:

| Property     | Description                                                                                               |
| ------------ | --------------------------------------------------------------------------------------------------------- |
| `.Aligns`    | Tooltip alignments <br/>`TOP` \| `CENTER` \| `BOTTOM` \| `LEFT` \| `RIGHT`                                |
| `.Colors`    | Tooltip colors <br/>`PRIMARY` \| `BLACK` \| `GREY` \| `BRAND` \| `GREEN` \| `YELLOW` \| `RED` \| `CUSTOM` |
| `.Positions` | Tooltip positions <br/>`TOP` \| `BOTTOM` \| `LEFT` \| `RIGHT` \| `CENTER` \| `WINDOW_CENTER`              |

Props:

| Name                           | Type                | Default   | Description                                                                       |
| ------------------------------ | ------------------- | --------- | --------------------------------------------------------------------------------- |
| `align?`                       | string              | `center`  | Tooltip alignment to the children; works together with `position`                 |
| `allowOverflow?`               | boolean             | `false`   | Whether the tooltip content can overflow                                          |
| `className?`                   | string              |           | Component class name                                                              |
| `color?`                       | string              | `primary` | Sets color of the tooltip                                                         |
| `delay?`                       | number              |           | How long the tooltip takes to appear in milliseconds                              |
| `disableTooltipPointerEvents?` | boolean             | `false`   | Whether to disable pointer events on the tooltip                                  |
| `forceOpen?`                   | boolean             | `false`   | Whether the tooltip is always visible                                             |
| `hide?`                        | boolean             | `false`   | Whether the tooltip is hidden                                                     |
| `hideOnClick?`                 | boolean             | `true`    | Whether the tooltip hides after clicking anywhere                                 |
| `onAnimationRest?`             | function            |           | Function ran when the tooltip is animating; its parameters are related to springs |
| `position?`                    | string              | `top`     | Tooltip position; works together with `align`                                     |
| `shouldShow?`                  | boolean             | `true`    | Whether the tooltip can show                                                      |
| `spacing?`                     | number              | `8`       | Distance from the children                                                        |
| `style?`                       | React.CSSProperties |           | Component style                                                                   |
| `text`                         | string              |           | Tooltip text                                                                      |
| `tooltipClassName?`            | string              |           | Tooltip element class name                                                        |
| `tooltipContentClassName?`     | string              |           | Tooltip content element class name                                                |
