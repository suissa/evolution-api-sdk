export type Jid = `${string}@s.whatsapp.net`;
export const Jid = (jid: string) => jid as Jid;

export type GroupJid = `${string}@g.us`;
export const GroupJid = (jid: string) => jid as GroupJid;

export type GroupInviteCode = string & { __tag: "GroupInviteCode" };
export const GroupInviteCode = (code: string) => code as GroupInviteCode;

export type MessageId = string & { __tag: "MessageId" };
export const MessageId = (id: string) => id as MessageId;

export type ChatId = string & { __tag: "ChatId" };
export const ChatId = (id: string) => id as ChatId;
