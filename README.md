<h1 align="center">Evolution API SDK for Javascript</h1>

<p align="center">Unofficial SDK for the <a href="https://doc.evolution-api.com/v2" target="_blank">Evolution Whatsapp API</a> (v2).</p>
<p align="center"><em>This is a fork of <a href="https://github.com/solufyapp/evolution-sdk" target="_blank">@solufy/evolution-sdk</a> with additional features.</em></p>

<div align="center">
  <div style="width: fit-content; display: flex; align-items: flex-start; gap: 4px;">
    <img alt="NPM License" src="https://img.shields.io/npm/l/evolution-api-sdk">
    <img alt="NPM Downloads" src="https://img.shields.io/npm/dw/evolution-api-sdk">
    <a href="https://npmjs.com/package/evolution-api-sdk">
      <img alt="NPM Version" src="https://img.shields.io/npm/v/evolution-api-sdk">
    </a>
  </div>
</div>

## Installation

```bash
npm install evolution-api-sdk
// or
yarn add evolution-api-sdk
// or
bun add evolution-api-sdk
```

## Getting Started

```ts
import { EvolutionClient } from "evolution-api-sdk"

const client = new EvolutionClient({
  serverUrl: "Your server url",
  token: "Global api key or instance token",
  instance: "Your instance" // optional
})
```

## Features

### Instances
- **Create, connect, and manage instances**
  ```ts
  client.instances.create({ instanceName: "my-instance" });
  client.instances.connect({ instanceName: "my-instance" });
  client.instances.connectionState({ instanceName: "my-instance" });
  client.instances.logout({ instanceName: "my-instance" });
  client.instances.delete({ instanceName: "my-instance" });
  client.instances.restart({ instanceName: "my-instance" });
  client.instances.fetchAll();
  client.instances.setPresence({ instanceName: "my-instance", presence: "available" });
  ```

### Chats
- **Check numbers, find chats, and manage chat interactions**
  ```ts
  client.chats.check("551199999999", "552299999999");
  client.chats.findAll();
  client.chats.markAsRead({ number: "551199999999" });
  client.chats.archive({ number: "551199999999", archive: true });
  client.chats.deleteMessage({ number: "551199999999", messageId: "message-id", owner: true });
  client.chats.fetchProfilePicture({ number: "551199999999" });
  ```

### Groups
- **Find and manage groups**
  ```ts
  client.groups.findAll();
  client.groups.findByJid("999999999999999999@g.us");
  client.groups.findByInviteCode("0000000000000000000000");
  client.groups.create({ subject: "My Group", participants: ["551199999999"] });
  ```

### Messages
- **Send various types of messages**
  Available types: **audio**, **contact**, **document**, **image**, **location**, **poll**, **sticker**, **text**, **video**, **voice**, **reaction**, **template**, **status**, and **list**.
  ```ts
  client.messages.sendText({
    number: "+551199999999",
    text: "Hi!",
    delay: 1000,
  });

  client.messages.sendImage({
    number: "5511999999999",
    image: "https://i.imgur.com/REo1ODy.png",
    caption: "A cute cat",
  });

  client.messages.sendAudio({
    number: "5511999999999",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  });

  client.messages.sendVideo({
    number: "5511999999999",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    caption: "A video",
  });

  client.messages.sendReaction({
    number: "+551199999999",
    messageId: "message-id",
    reaction: "👍"
  });
  ```

### Profile
- **Manage your profile settings**
  ```ts
  client.profile.fetchProfile({ jid: "551199999999@s.whatsapp.net" });
  client.profile.updateName({ name: "My New Name" });
  client.profile.updateStatus({ status: "My new status" });
  ```

### Webhook Usage
- **Parse incoming webhooks**
  ```ts
  import { WebhookPayloadSchema, WebhookEvent } from "evolution-api-sdk";

  function handleWebhook(payload: unknown) {
    const result = WebhookPayloadSchema.safeParse(payload);

    if (!result.success) {
      console.error("Invalid webhook payload:", result.error);
      return;
    }

    const { data: webhook } = result;

    if (webhook.event === WebhookEvent.MessagesUpsert) {
      const message = webhook.data.message;
      console.log(`New message from ${webhook.data.pushName} in ${webhook.data.key.remoteJid}`);
      
      // Now you can check the message type and handle it accordingly
      if ("extendedTextMessage" in message) {
        console.log("-> Text:", message.extendedTextMessage.text);
      } else if ("imageMessage" in message) {
        console.log("-> Image, caption:", message.imageMessage.caption);
      }
    }
  }

  // Example of a raw payload you might receive
  const examplePayload = {
    event: "messages.upsert",
    instance: "my-instance",
    data: {
      key: {
        remoteJid: "5511999999999@s.whatsapp.net",
        fromMe: false,
        id: "3EB0B8A1B2C3D4E5F6A7B8C9D0E1F2A3",
      },
      pushName: "Gus",
      message: {
        messageType: "text",
        extendedTextMessage: {
          text: "Hello from the other side!",
        },
      },
      messageType: "extendedTextMessage",
      messageTimestamp: 1678886400,
      owner: "5511988888888@s.whatsapp.net",
      source: "whatsapp",
    },
    date: "2023-03-15T12:00:00.000Z",
    webhook: "http://localhost:3000/webhook"
  };

  handleWebhook(examplePayload);
  ```

### Webhooks
- **Set and find webhooks**
  ```ts
  client.webhook.set({ url: "https://my-webhook-url.com", enabled: true, webhook_by_events: false, events: [] });
  client.webhook.find();
  ```

### Settings
- **Manage instance settings**
  ```ts
  client.settings.set({ reject_call: true });
  client.settings.find();
  ```

## API Documentation

Check the [official API documentation](https://doc.evolution-api.com/v2) for more information about their service.

## Contributing

Feel free to contribute with suggestions or bug reports at our [GitHub repository](https://github.com/gusnips/evolution-api-sdk).

## Authors

- [@joaotonaco](https://github.com/joaotonaco) (Original author)
- [@gusnips](https://github.com/gusnips)