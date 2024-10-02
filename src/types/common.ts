export type Jid = `${string}@s.whatsapp.net`;

export type MessageId = string & { __brand: "MessageId" };
