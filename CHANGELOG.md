# evolution-api-sdk

## 0.3.0

### Minor Changes

- Added `Instance`, `Profile`, `Webhook`, and `Settings` modules.
- Added missing methods to `Messages`, `Chats`, and `Groups` modules.
- Added `setInstance` method to `EvolutionClient` to allow setting the instance after initialization.
- Added types for webhook payloads (`WebhookPayloadSchema`).
- Added `WebhookEvent` enum for all supported webhook events.
- Updated `README.md` with more usage examples.

### Patch Changes

- Updated `package.json` with new author and repository information.

## 0.2.1

### Patch Changes

- 35a7989: Include instance in error messages.
- 1638df7: Add AggregateError to mapped errors

## 0.2.0

### Minor Changes

- 155b3de: Improved error messages

## 0.1.2

### Patch Changes

- d8bcc58: Fix waveform parsing error.

## 0.1.1

### Patch Changes

- bffe8f7: Fix API response validation

## 0.1.0

### Minor Changes

- 308a394: **Chats module** for finding chats, sending presences and checking numbers
- 308a394: **Messages module** for sending messages
- 308a394: **Groups module** for finding groups
