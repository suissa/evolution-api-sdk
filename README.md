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

## Usage Examples

### Sending a Text Message
```ts
await client.messages.sendText({
  number: "5511999999999",
  text: "Hello from the SDK!",
});
```

### Sending an Image
```ts
await client.messages.sendImage({
  number: "5511999999999",
  image: "https://i.imgur.com/REo1ODy.png",
  caption: "A cute cat",
});
```

### Creating a Group
```ts
await client.groups.create({
  subject: "My Awesome Group",
  participants: ["5511999999999", "5522988888888"],
});
```

### Checking if a Number has WhatsApp
```ts
const result = await client.chats.check("5511999999999");
console.log(result);
// [{ jid: '5511999999999@s.whatsapp.net', exists: true }]
```

## API Reference

### Instances

- **`create(options: CreateOptions): Promise<CreateResponse>`**
  - Creates a new instance.
- **`connect(options: ConnectOptions): Promise<ConnectResponse>`**
  - Connects to an instance.
- **`connectionState(options: ConnectionStateOptions): Promise<ConnectionStateResponse>`**
  - Gets the connection state of an instance.
- **`logout(options: LogoutOptions): Promise<LogoutResponse>`**
  - Logs out of an instance.
- **`delete(options: DeleteOptions): Promise<DeleteResponse>`**
  - Deletes an instance.
- **`restart(options: RestartOptions): Promise<RestartResponse>`**
  - Restarts an instance.
- **`fetchAll(): Promise<FetchAllResponse>`**
  - Fetches all instances.
- **`setPresence(options: SetPresenceOptions): Promise<SetPresenceResponse>`**
  - Sets the presence of the instance.

### Chats

- **`check(...numbers: CheckOptions | CheckOptions[]): Promise<CheckResponse>`**
  - Checks if a number has WhatsApp.
- **`findAll(): Promise<FindAllChatsResponse>`**
  - Gets all chats.
- **`sendPresence(options: PresenceOptions): Promise<void>`**
  - Sends a presence to a certain chat.
- **`markAsRead(options: MarkAsReadOptions): Promise<MarkAsReadResponse>`**
  - Marks a chat as read.
- **`archive(options: ArchiveOptions): Promise<ArchiveResponse>`**
  - Archives a chat.
- **`deleteMessage(options: DeleteMessageOptions): Promise<DeleteMessageResponse>`**
  - Deletes a message in a chat.
- **`fetchProfilePicture(options: FetchProfilePictureOptions): Promise<FetchProfilePictureResponse>`**
  - Fetches the profile picture of a chat.
- **`findContact(options: FindContactsOptions): Promise<FindContactsResponse>`**
  - Finds a contact.
- **`findMessages(options: FindMessagesOptions): Promise<FindMessagesResponse>`**
  - Finds messages in a chat.
- **`findStatusMessage(options: FindStatusMessageOptions): Promise<FindStatusMessageResponse>`**
  - Finds a status message.
- **`updateMessage(options: UpdateMessageOptions): Promise<UpdateMessageResponse>`**
  - Updates a message.

### Groups

- **`findAll(getParticipants: boolean): Promise<FindAllGroupsResponse | FindAllGroupsWithParticipantsResponse>`**
  - Gets all groups.
- **`findByInviteCode(inviteCode: string | GroupInviteCode): Promise<FindGroupByInviteCodeResponse>`**
  - Gets a group by invite code.
- **`findByJid(groupJid: string | GroupJid): Promise<FindGroupByJidResponse>`**
  - Gets a group by JID.
- **`create(options: CreateGroupOptions): Promise<CreateGroupResponse>`**
  - Creates a new group.
- **`updatePicture(options: UpdatePictureOptions): Promise<UpdatePictureResponse>`**
  - Updates the group picture.
- **`updateSubject(options: UpdateSubjectOptions): Promise<UpdateSubjectResponse>`**
  - Updates the group subject.
- **`updateDescription(options: UpdateDescriptionOptions): Promise<UpdateDescriptionResponse>`**
  - Updates the group description.
- **`fetchInviteCode(options: FetchInviteCodeOptions): Promise<FetchInviteCodeResponse>`**
  - Fetches the group invite code.
- **`acceptInviteCode(options: AcceptInviteCodeOptions): Promise<AcceptInviteCodeResponse>`**
  - Accepts a group invite code.
- **`revokeInviteCode(options: RevokeInviteCodeOptions): Promise<RevokeInviteCodeResponse>`**
  - Revokes the group invite code.
- **`sendGroupInvite(options: SendGroupInviteOptions): Promise<SendGroupInviteResponse>`**
  - Sends a group invite.
- **`findMembers(options: FindMembersOptions): Promise<FindMembersResponse>`**
  - Finds members of a group.
- **`updateMembers(options: UpdateMembersOptions): Promise<UpdateMembersResponse>`**
  - Updates the members of a group.
- **`updateSetting(options: UpdateSettingOptions): Promise<UpdateSettingResponse>`**
  - Updates a group setting.
- **`toggleEphemeral(options: ToggleEphemeralOptions): Promise<ToggleEphemeralResponse>`**
  - Toggles ephemeral messages in a group.
- **`leave(options: LeaveOptions): Promise<LeaveResponse>`**
  - Leaves a group.

### Messages

- **`sendText(options: TextMessageOptions): Promise<TextMessageResponse>`**
  - Sends a text message.
- **`sendImage(options: ImageMessageOptions): Promise<ImageMessageResponse>`**
  - Sends an image message.
- **`sendVideo(options: VideoMessageOptions): Promise<VideoMessageResponse>`**
  - Sends a video message.
- **`sendDocument(options: DocumentMessageOptions): Promise<DocumentMessageResponse>`**
  - Sends a document message.
- **`sendAudio(options: AudioMessageOptions): Promise<AudioMessageResponse>`**
  - Sends an audio message.
- **`sendVoice(options: VoiceMessageOptions): Promise<VoiceMessageResponse>`**
  - Sends a voice message.
- **`sendSticker(options: StickerMessageOptions): Promise<StickerMessageResponse>`**
  - Sends a sticker message.
- **`sendLocation(options: LocationMessageOptions): Promise<LocationMessageResponse>`**
  - Sends a location message.
- **`sendContact(options: ContactMessageOptions): Promise<ContactMessageResponse>`**
  - Sends a contact message.
- **`sendReaction(options: ReactionMessageOptions): Promise<ReactionMessageResponse>`**
  - Sends a reaction to a message.
- **`sendTemplate(options: TemplateMessageOptions): Promise<TemplateMessageResponse>`**
  - Sends a template message.
- **`sendStatus(options: StatusMessageOptions): Promise<StatusMessageResponse>`**
  - Sends a status message.
- **`sendList(options: ListMessageOptions): Promise<ListMessageResponse>`**
  - Sends a list message.

### Profile

- **`fetchBusinessProfile(options: FetchBusinessProfileOptions): Promise<FetchBusinessProfileResponse>`**
  - Fetches the business profile.
- **`fetchProfile(options: FetchProfileOptions): Promise<FetchProfileResponse>`**
  - Fetches the profile.
- **`updateName(options: UpdateNameOptions): Promise<UpdateNameResponse>`**
  - Updates the profile name.
- **`updateStatus(options: UpdateStatusOptions): Promise<UpdateStatusResponse>`**
  - Updates the profile status.
- **`updatePicture(options: UpdatePictureOptions): Promise<UpdatePictureResponse>`**
  - Updates the profile picture.
- **`removePicture(): Promise<RemovePictureResponse>`**
  - Removes the profile picture.
- **`fetchPrivacySettings(): Promise<FetchPrivacySettingsResponse>`**
  - Fetches the privacy settings.
- **`updatePrivacySettings(options: UpdatePrivacySettingsOptions): Promise<UpdatePrivacySettingsResponse>`**
  - Updates the privacy settings.

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

- **`set(options: SetOptions): Promise<SetResponse>`**
  - Sets the webhook configuration.
- **`find(): Promise<FindResponse>`**
  - Finds the webhook configuration.

### Settings

- **`set(options: SetOptions): Promise<SetResponse>`**
  - Sets the instance settings.
- **`find(): Promise<FindResponse>`**
  - Finds the instance settings.

## API Documentation

Check the [official API documentation](https://doc.evolution-api.com/v2) for more information about their service.

## Contributing

Feel free to contribute with suggestions or bug reports at our [GitHub repository](https://github.com/gusnips/evolution-api-sdk).

## Authors

- [@joaotonaco](https://github.com/joaotonaco) (Original author)
- [@gusnips](https://github.com/gusnips)