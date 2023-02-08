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

## Interacting with settings manager

The settings manager functions similar to a JavaScript `Map`, but has some extra functionality.

### Get a value

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

### Set a value

```ts
cfg.set("foo", "world");
```

### Delete a value

```ts
cfg.delete("foo");
```

### Check if a value exists

```ts
if (cfg.has("foo")) {
  // ...
}
```

Note that default values are ignored when checking if a value exists.

### Get all values

```ts
const values = cfg.all();
```

Note that this will not include default values.
