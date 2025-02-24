---
sidebar_position: 5
title: Store
description: Adding, updating, and migrating to the store
---

# Replugged Addon Store

Released in v4.3.0, the Replugged store is a new source for distributing addons (previously,
distribution was done through GitHub). While there is no frontend yet
([#plugin-links](https://discord.com/channels/1000926524452647132/1053466391874900078) and
[#theme-links](https://discord.com/channels/1000926524452647132/1053467493743738961) will continue
to be used for the time being), addon distribution can now be done through our servers. The main
benefits of this include:

- No longer subject to GitHub API rate limits. This means we can add automatic update checking.
- Addons and updates will now be reviewed, preventing a developer from creating a malicious release
  (ie token grabber)

Official addons (those posted in the above channels) will be required to use the store for
distribution. Unofficial addons will still use GitHub for distribution.

## Migrating to the store

Before requesting your addon be reviewed, your addon must be migrated to the store.

- In your manifest, change `updater.type` to `"store"` and change `updater.id` to your addon ID
  (same as the other ID field). For example:

  ```json
  {
    "id": "dev.replugged.PluginTemplate",
    "updater": {
      "type": "store",
      "id": "dev.replugged.PluginTemplate"
    }
  }
  ```

- Release a new version with the above change

- In your installer links, remove the `source` parameter and set `identifier` to the addon ID. For
  example: https://replugged.dev/install?identifier=dev.replugged.PluginTemplate

  :::warning

  Do not update the install links until your addon has been approved. The links will not work until
  we approve your addon.

  :::

## Requesting new addons or updates

:::note

Make sure your addon is migrated to the store before requesting a review.

:::

### Existing Developers

For existing developers, you can create a post in
[#addon-reviews](https://discord.com/channels/1000926524452647132/1106817903967338496) to request a
new addon or updates to an existing addon. The post guidelines in the channel explain what to
include in your post, so please read them fully before posting.

Reviews for updates will not be very intensive; we are mainly checking for malicious code. You are
still responsible for ensuring your addon works as intended.

### New Developers

If you are a new developer, send a message in
[#plugin-dev](https://discord.com/channels/1000926524452647132/1000955966520557689) or
[#theme-dev](https://discord.com/channels/1000926524452647132/1000955967627874424) with a link to
your source code and ping one of our staff to review it. After your addon is approved, you will be
given permissions to post to the appropriate links channel and will be given access to
[#addon-reviews](https://discord.com/channels/1000926524452647132/1106817903967338496) for
requesting updates and new addons.
