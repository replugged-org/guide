---
description: Discord's implementation of Flux
---

Flux is an architecture for managing data flow. Stores are objects that can hold state and logic.
They are responsible for updating and retrieving data by triggering actions. The dispatcher is
responsible for receiving these actions and directing them to the appropriate stores.

### Example

In the following example we will create a new store for mapping messages to users.

```ts
import { Message } from "discord-types/general";
import { common } from "replugged";
const { fluxDispatcher: FluxDispatcher, flux: Flux } = common;

// Here are stored all our users and their messages
const userMessagesMap: Map<string, Map<string, Message>> = new Map();

function handleMessageCreate(message: Message): void {
  /*
    This function will be called only when a message is received,
    so when the dispatcher received the MESSAGE_CREATE action type.
  */
  if (message.state === "SENDING") return;

  const userId = message.author.id;
  const userMessages = userMessagesMap.get(userId) ?? new Map();

  userMessages.set(message.id, message);

  userMessagesMap.set(userId, userMessages);
}

function handleMessagesClearRequest(userId: string): void {
  if (userMessagesMap.has(userId)) {
    userMessagesMap.delete(userId);
  }
}

class UserMessagesStore extends Flux.Store {
  public clearUserMessages(userId: string): void {
    // Function to delete a user from userMessagesMap
    handleMessagesClearRequest(userId);
  }
}

export default new UserMessagesStore(FluxDispatcher, {
  MESSAGE_CREATE: (action) => {
    return handleMessageCreate(action.message);
  },
  USER_MESSAGES_DELETE: (action) => {
    // This is a custom action type we created for this example. It will delete a specific map entry (userId).
    return handleMessagesClearRequest(action.userId);
  },
});
```

In this example, the action of deleting an entry from the map can be called with the
[`fluxDispatcher`](./fluxDispatcher). We recommend creating separate files that export actions:

```ts
export default {
  clearMessages(userId: string) {
    FluxDispatcher.dispatch({
      type: "USER_MESSAGES_DELETE",
      userId,
    });
  },
};
```

Or with the appropriate function:

```ts
UserMessagesStore.clearUserMessages("USER_ID");
```

:::tip

You can expose a store by setting its display name and the `__getLocalVars` function.

<!-- eslint-disable @typescript-eslint/naming-convention -->

```ts
class UserMessagesStore extends Flux.Store {
  public displayName: "UserMessagesStore";

  // ...

  // highlight-start
  public __getLocalVars(): Record<string, unknown> {
    return { userMessagesMap };
  }
  // highlight-end
}

export default new UserMessagesStore(FluxDispatcher, {
  // ...
});
```

:::

<!-- TODO: Functions table -->
