---
sidebar_position: 4
title: Settings
description: How to use the settings API and render a settings panel
---

# Plugin Settings

## Creating a settings manager

The settings manager allows you to store and retrieve settings for your plugin.

```ts
import { settings } from "replugged";

const cfg = await settings.init("YOUR_PLUGIN_ID");
```

To avoid conflicts with other plugins, the ID used should be the same as your plugin ID.

### Type hints

The settings manager has a type parameter which allows you to define the type of each of your
settings.

```ts
import { settings } from "replugged";

interface Settings {
  foo?: string;
  bar?: number;
}

const cfg = await settings.init<Settings>("YOUR_PLUGIN_ID");
```

Since the settings are not guaranteed to exist, the keys should be marked as optional.

### Default settings

The settings manager accepts an object for default settings. The values in this object will be used
if a setting does not have any value.

The `init` function accepts a second type parameter, which is a list of keys in your settings object
that will always exist. This will make the type definitions show that the keys cannot be undefined.

```ts
import { settings } from "replugged";

interface Settings {
  foo?: string;
  bar?: number;
}

const defaultSettings: Partial<Settings> = {
  foo: "hello",
};

const cfg = await settings.init<Settings, keyof typeof defaultSettings>(
  "YOUR_PLUGIN_ID",
  defaultSettings,
);
```

## Interacting with the settings manager

The settings manager functions similar to a JavaScript `Map`, but has some extra functionality.

### Get a value {#get}

```ts
const foo = cfg.get("foo");
```

If you specified a default value and there isn't a value for the key, the default value will be
returned and the type definition will show that the value cannot be undefined.

You can also specify a `fallback` value. This takes precedence over the default value and can be
used even if there is no default value. Like with the default value, the type definition will show
that the value cannot be undefined.

```ts
const bar = cfg.get("bar", 5);
```

### Set a value {#set}

```ts
cfg.set("foo", "world");
```

### Delete a value {#delete}

```ts
cfg.delete("foo");
```

### Check if a value exists {#has}

```ts
if (cfg.has("foo")) {
  // ...
}
```

Note that default values are ignored when checking if a value exists.

### Get all values {#all}

```ts
const values = cfg.all();
```

Note that this will not include default values.

## Settings page

A settings page can be specified by exporting a function called `Settings` which returns a React
component.

```tsx
export function Settings(): React.ReactElement {
  return <div>Hello world!</div>;
}
```

### useSetting hook

Replugged includes a react hook that makes it easy to interact with the settings manager.

```tsx
import { settings, util } from "replugged";

const cfg = await settings.init("YOUR_PLUGIN_ID");

export function Settings(): React.ReactElement {
  return <TextInput {...util.useSetting(cfg, "foo", "bar")} />;
}
```

`foo` is the key in the settings manager and `bar` is the fallback value (works like [`get`](#get)).
The hook will automatically handle setting the value of the input component and updating the
settings manager when the value changes.

:::caution

If you use this hook, you cannot use the `value` or `onChange` properties on a component since they
will override the properties set by the hook.

One way around this is to get `value`/`onChange` from the hook outside of the component and then use
that in your custom props.

```tsx
import { settings, util } from "replugged";

const cfg = await settings.init("YOUR_PLUGIN_ID");

export function Settings(): React.ReactElement {
  const { value, onChange } = util.useSetting(cfg, "foo", "bar");
  return (
    <TextInput
      value={value}
      onChange={(value) => {
        console.log(value);
        onChange(value);
      }}
    />
  );
}
```

You can also use the regular `useState` hook and use [get](#get) and [set](#set) on the settings
manager yourself.

:::

### Input components

Replugged includes a few input components that can be used in your settings page. You can also
create your own components or find components in the [webpack modules](modules#finding-modules)

#### FormItem (wrapper)

FormItem is a wrapper component that can be used to add a title and/or description to a component.

:::caution

Any components below whose name ends in `Item` already has a `FormItem` wrapper. You should not use
this on those components.

:::

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

```ts
interface FormItemProps {
  title?: React.ReactNode;
  note?: string;
  error?: React.ReactNode;
  disabled?: boolean;
  required?: boolean;
  divider?: boolean;
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "label" | "legend";
  notePosition?: "before" | "after";
  style?: React.CSSProperties;
  noteStyle?: React.CSSProperties;
  className?: string;
  titleClassName?: string;
  noteClassName?: string;
}
```

#### TextInput

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

Props:

```ts
interface TextInputProps {
  autoFocus?: boolean;
  disabled?: boolean;
  editable?: boolean;
  minLength?: number;
  maxLength?: number;
  name?: string;
  placeholder?: string;
  size?: string;
  type?: string;
  error?: string;
  value?: string;
  style?: React.CSSProperties;
  className?: string;
  inputClassName?: string;
  onChange?: (e: string) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}
```

#### TextArea

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

```ts
interface TextAreaProps {
  autoFocus?: boolean;
  disabled?: boolean;
  required?: boolean;
  editable?: boolean;
  allowOverflow?: boolean;
  resizeable?: boolean;
  flex?: boolean;
  autosize?: boolean;
  minLength?: number;
  maxLength?: number;
  rows?: number;
  name?: string;
  placeholder?: string;
  error?: string;
  value?: string;
  className?: string;
  onChange?: (e: string) => void;
  onInvalid?: (e: React.FormEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}
```

#### SwitchItem

On/off toggle switch

```tsx
import { components } from "replugged";
const { SwitchItem } = components;

export function Settings(): React.ReactElement {
  return <SwitchItem {...util.useSetting(cfg, "foo", true)}>Switch title</SwitchItem>;
}
```

Props:

```ts
interface SwitchItemProps {
  value: boolean;
  onChange: (e: boolean) => void;
  note?: string;
  tooltipNote?: string;
  disabled?: boolean;
  hideBorder?: boolean;
  style?: React.CSSProperties;
  className?: string;
}
```

#### CheckboxItem

```tsx
import { components } from "replugged";
const { CheckboxItem } = components;

export function Settings(): React.ReactElement {
  return <CheckboxItem {...util.useSetting(cfg, "foo", true)}>Checkbox title</CheckboxItem>;
}
```

Props:

```ts
interface CheckboxItemProps {
  disabled?: boolean;
  readOnly?: boolean;
  reverse?: boolean;
  displayOnly?: boolean;
  shape?: string;
  align?: string;
  type?: string;
  color?: string;
  checkboxColor?: string;
  size?: number;
  value?: boolean;
  style?: React.CSSProperties;
  className?: string;
  innerClassName?: string;
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
```

#### RadioItem

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

Props:

```ts
interface RadioOptionType {
  name: string;
  value: string;
  desc?: string;
  disabled?: boolean;
  color?: string;
  tooltipText?: string;
  tooltipPosition?: "top" | "bottom" | "left" | "right" | "center" | "window_center";
}

interface RadioItemProps {
  options: RadioOptionType[];
  value?: string;
  onChange: (e: RadioOptionType) => void;
  note?: string;
  disabled?: boolean;
  size?: string;
  radioPosition?: "left" | "right";
  withTransparentBackground?: boolean;
  style?: React.CSSProperties;
  className?: string;
  itemInfoClassName?: string;
  itemTitleClassName?: string;
  radioItemClassName?: string;
}
```

#### SelectItem

Dropdown select

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

```ts
interface SelectOptionType {
  label: string;
  value: string;
  disabled?: boolean;
  key?: string;
}

interface SelectItemProps {
  options: SelectOptionType[];
  value?: string;
  onChange?: (e: string) => void;
  note?: string;
  isSelected?: (e: string) => void;
  serialize?: (e: string) => void;
  select?: (e: string) => void;
  onSelect?: (e: string) => void;
  clear?: () => void;
  onClear?: () => void;
  placeholder?: string;
  isDisabled?: boolean;
  disabled?: boolean;
  maxVisibleItems?: number;
  autoFocus?: boolean;
  popoutWidth?: number;
  clearable?: boolean;
  look?: number;
  popoutPosition?: "top" | "bottom" | "left" | "right" | "center" | "window_center";
  closeOnSelect?: boolean;
  hideIcon?: boolean;
  onClose?: () => void;
  onOpen?: () => void;
  renderOptionLabel?: (e: SelectOptionType) => void;
  renderOptionValue?: (e: SelectOptionType[]) => void;
  style?: React.CSSProperties;
  className?: string;
  popoutClassName?: string;
  optionClassName?: string;
}
```

#### SliderItem

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

```ts
interface SliderItemProps {
  value?: number;
  onChange?: (e: number) => void;
  note?: string;
  disabled?: boolean;
  markers?: number[];
  stickToMarkers?: boolean;
  initialValue?: number;
  defaultValue?: number;
  minValue?: number;
  maxValue?: number;
  mini?: boolean;
  hideBubble?: boolean;
  barStyles?: React.CSSProperties;
  fillStyles?: React.CSSProperties;
  grabberStyles?: React.CSSProperties;
  style?: React.CSSProperties;
  className?: string;
  barClassName?: string;
  grabberClassName?: string;
  onValueChange?: (e: number) => void;
  asValueChanges?: (e: number) => void;
  onValueRender?: (e: number) => string;
  onMarkerRender?: (e: number) => string;
}
```
