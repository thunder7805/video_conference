import { Message as TMessage } from "../api/message/Message";

export const MESSAGE_TITLE_FIELD = "senderId";

export const MessageTitle = (record: TMessage): string => {
  return record.senderId?.toString() || String(record.id);
};
