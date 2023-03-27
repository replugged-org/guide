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

Replugged includes a few [input components](components#input-components) that can be used in your
settings page. You can also create your own components or find components in the
[webpack modules](modules#finding-modules).
