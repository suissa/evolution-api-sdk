export type Jid = `${string}@s.whatsapp.net`;
export const Jid = (jid: string) => jid as Jid;

export type GroudJid = `${string}@g.us`;
export const GroudJid = (jid: string) => jid as GroudJid;

export type MessageId = string & { __tag: "MessageId" };
export const MessageId = (id: string) => id as MessageId;

export type ChatId = string & { __tag: "ChatId" };
export const ChatId = (id: string) => id as ChatId;
