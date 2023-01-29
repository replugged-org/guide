---
sidebar_position: 3
title: Injecting into Modules
description: Learn how to inject into webpack modules and change their behavior
---

# Injecting into Modules

Injection is one of the most important parts of a plugin. It allows you to change the behavior of a
[module](modules).

## Plugin Lifecycle

The index file of the plugin (usually `src/index.ts`, can be configured in your manifest) should
export 2 functions: `start` and `stop`. Your plugin should run injection code in `start` and remove
all injections in `stop`.

## Creating an Injector

```ts
import { Injector } from "replugged";
const injector = new Injector();
```

## Injecting into a Module

First, you will need to find the module you want to inject into and the property name on that
object. See [the modules page](modules#finding-modules) for more information on how to find modules.

There are 3 types of injections which determine how it behaves:

### `before`

This injection will run on the module before the original method is called and will receive the
props of the original method. This is useful for modifying the arguments of the original method or
running other code when the original method is called.

```ts
injector.before(mod, "method", (props) => {
  // props is an array of the arguments passed to the original method

  // the props returned will be passed to the original method
  // you can return undefined if you want to use the original props
  return props;
});
```

### `instead`

This injection will completely replace the original method with your own. This is useful for
completely changing the behavior of a method, or if you want to prevent it from running at all.

```ts
injector.instead(mod, "method", (props, fn) => {
  // props is an array of the arguments passed to the original method

  // any value returned from this function will be returned to the original caller
  // if you want to run the original method, you can call fn with the original props (or modified props)
  return fn(...props);
});
```

### `after`

This injection will run on the module after the original method is called and will receive the props
of the original method and the return value of the original method. This is useful for modifying the
return value of the original method or running other code based on the return value of the original
method.

```ts
injector.after(mod, "method", (props, res) => {
  // props is an array of the arguments passed to the original method (similar to `before`)
  // res is the return value of the original method

  // you can return a modified version of the return value if you want to modify it
  // or you can return undefined if you want to use the original return value
  return res;
});
```

### Comparison

| Injection | Starts at              | Ends at                | Input                                      | Output                | Can modify props | Can modify return value | Calls original method            |
| --------- | ---------------------- | ---------------------- | ------------------------------------------ | --------------------- | ---------------- | ----------------------- | -------------------------------- |
| `before`  | Start of function call | Start of function call | Function props                             | Function props        | Yes              | No                      | Yes                              |
| `instead` | Start of function call | End of function call   | Function props                             | Function return value | Yes              | Yes                     | No (unless you call it yourself) |
| `after`   | End of function call   | End of function call   | Function return value (includes props too) | Function return value | No               | Yes                     | Yes                              |

## Removing an Injection

Each injection returns a function which can be called to remove the injection.

```ts
const removeTheInjection = injector.before(mod, "method", (props) => {
  // ...
});

// later on, you can call remove to remove the injection
removeTheInjection();
```

The injector class has an `uninjectAll` method which will remove all injections for the plugin.

```ts
import { Injector } from "replugged";
const injector = new Injector();

export function start() {
  // do your injections here
}

export function stop() {
  injector.uninjectAll();
}
```
