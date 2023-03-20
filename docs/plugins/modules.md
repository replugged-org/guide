---
sidebar_position: 2
title: Webpack Modules
description: What are webpack modules and how can you find them?
---

# Webpack Modules

Discord is made using [Webpack](https://webpack.js.org/), which is a module bundler. Webpack splits
the code into modules and bundles them together. Each module is a JavaScript object that contains
various exports, such as constants, methods, and React components.

## Finding modules

In order to use a module, you will need to find it first. There are a few ways to do this:

### Common modules

Replugged comes with a bunch of modules that are commonly used. You can access them with:

```ts
import { common } from "replugged";
```

:::caution

Your editor may suggest importing a module directly from within `replugged/dist/whatever`, but this
will not work. You should always import from `replugged` itself and destructure the module you want.

:::

:::tip

You can access common modules in Discord DevTools with `replugged.common`.

:::

Common modules are documented at [here](https://docs.replugged.dev/modules/common.html).

:::note

Better documentation for common modules is coming soon.

:::

### Get module {#getModule}

You can write a function that will be used to find the module. This functions similar to the
[Array.find](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
parameter.

```ts
import { webpack } from "replugged";
const { getModule } = webpack;

export function start() {
  const typingModule = getModule((m) => /* your code here */ someFn(m));
}
```

Replugged also comes with a `filters` object with a few common filters. These are described below.

### Wait for module {#waitForModule}

When Discord is starting, a module may not be available yet. For example, Replugged provides a
`waitForModule` function that will wait for a module to be available before continuing. This works
similar to `getModule`, but it returns a promise. The `all` option is not available for this
function since it will only wait for one module.

```ts
import { webpack } from "replugged";
const { filters, waitForModule } = webpack;

export async function start() {
  const typingMod = await waitForModule(filters.bySource("HORIZONTAL_REVERSE:"));
}
```

:::note

For props filters, use [`waitForProps`](#waitForProps) instead.

:::

:::caution

By default, `waitForModule` will wait indefinitely. You can set a timeout using the
[`timeout` option](#timeout).

:::

### Get by props {#getByProps}

Most util/method modules can be found by using `getByProps`. This function takes an array of strings
and finds a module that has all of the properties in the array.

```ts
import { webpack } from "replugged";
const { filters, getByProps, waitForModule } = webpack;

export function start() {
  const typingModule = getByProps("getChannelId", "addChangeListener");
  // or:
  const typingModule = getModule(filters.byProps("getChannelId", "addChangeListener"));
}
```

#### Wait for props {#waitForProps}

Works like [`getByProps`](#getByProps), but waits for the module to be available like with
[`waitForModule`](#waitForModule).

```ts
import { webpack } from "replugged";
const { waitForProps } = webpack;

export function start() {
  const typingModule = await waitForProps("getChannelId", "addChangeListener");
}
```

### Get by source {#getBySource}

For modules that do not have human-readable properties (such as components), you can use
`getBySource` to find a module by its source code. To use this, you will need to find the source
code of your module in the Discord DevTools. Once you find it, you will need to come up with a
unique string (or regex) that is only present in that module. You can then use this string to find
the module.

```ts
import { webpack } from "replugged";
const { filters, getBySource, waitForModule } = webpack;

export function start() {
  const flexMod = getBySource("HORIZONTAL_REVERSE:");
  // or:
  const flexMod = getModule(filters.bySource("HORIZONTAL_REVERSE:"));
}
```

:::caution

Randomized variable names within the source code (usually 1-2 characters, alphanumeric) can change
between Discord updates and should not be considered stable. This means that your plugin may break
if Discord updates. If the string you are using contains one of these variables, you should use a
regular expression to make it more stable.

Note that this function looks at the minified source code, so your query will need to match the
minified code.

:::

You should make sure that your query will only match one module. If it matches multiple modules, you
might sometimes get the wrong module and your plugin could break. To test your query, you can call
the function in Discord DevTools with `{all: true}` and see if it returns multiple modules.

```js
replugged.webpack.getBySource("HORIZONTAL_REVERSE", { all: true });
```

In this case, there are 4 different modules that match the query. We can improve the query by
appending a `:`, which only exists in the module we're looking for.

### Get by ID

Webpack modules have an `id` property that is used to separate them. This is a number, usually
around 6 digits. You'll see a bunch of functions in the Discord source code that are getting a
module by its ID.

:::danger

Module IDs are not stable and will change between Discord updates. This can be used in development
to find a module you already know the ID of, but you should not use this in production unless you're
dynamically finding the ID.

:::

```ts
import { webpack } from "replugged";
const { getById } = webpack;

export function start() {
  const typingModule = getById(123456);
}
```

## Processing modules

### Get export for props {#getExportForProps}

When using `filters.byProps`, the actual properties you need may be nested under a random key. To
get the actual export, you can use `getExportForProps`.

```ts
import { webpack } from "replugged";
const { filters, getExportForProps, waitForModule } = webpack;

export async function start() {
  const typingModuleRaw = await waitForModule(filters.byProps("getChannelId", "addChangeListener"));
  const typingModule = getExportForProps(typingModuleRaw, ["getChannelId", "addChangeListener"]);
}
```

:::note

This function is not needed when using [`getByProps`](#getByProps) or
[`waitForProps`](#waitForProps) because they already do this for you.

:::

### Get function by source {#getFunctionBySource}

This function will find a function in an object that matches the given source code (string or
regex).

```ts
import { webpack } from "replugged";
const { getBySource, getFunctionBySource } = webpack;

export function start() {
  const module = getBySource("YOUR QUERY HERE");
  const functionInModule = getFunctionBySource(module, "YOUR QUERY HERE");
}
```

### Get function key by source {#getFunctionKeyBySource}

Works like [`getFunctionBySource`](#getFunctionBySource), but returns the key of the function
instead of the function itself. Useful for getting the property name to use for
[injecting](injecting).

```ts
import { Injector, webpack } from "replugged";
const { getBySource, getFunctionKeyBySource } = webpack;
const injector = new Injector();

export function start() {
  const module = getBySource("YOUR QUERY HERE");
  const keyInModule = getFunctionKeyBySource(module, "YOUR QUERY HERE");

  injector.after(module, keyInModule, (args, res) => {
    console.log("Function was called!", { args, res });
  });
}
```

## Options

All functions that find modules take an options object as the last parameter.

:::note

For [`getByProps`](#getByProps), you will need to put the props in an array to specify the options:

```ts
getByProps(["getChannelId", "addChangeListener"], { all: true });
```

:::

### `all`

:::note

Not available for [`waitForModule`](#waitForModule) or [`waitForProps`](#waitForProps).

:::

This option will return all modules that match the query instead of just the first one. If there are
multiple modules that match your query, you can use this and then filter the results to find the one
you want.

```ts
getByProps(["getChannelId", "addChangeListener"], { all: true });
```

### `raw`

Replugged usually does some extra processing on the modules to make them easier to use. However,
this can sometimes cause the properties you need to be lost. If you need the raw module, you can use
this option.

```ts
getByProps(["getChannelId", "addChangeListener"], { raw: true });
```

### `timeout`

:::note

Only available for [`waitForModule`](#waitForModule) and [`waitForProps`](#waitForProps).

:::

By default, these functions will wait forever for a module to be available. If you set a timeout, it
will reject the promise after the specified time (milliseconds).

```ts
waitForModule(filters.byProps("getChannelId", "addChangeListener"), { timeout: 10_000 });
```
