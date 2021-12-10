import { createSelector } from "reselect";

const selectChat = state => state.chat;
const selectList = state => state.chatList;

export const selectChatList = createSelector([selectList], selectList => selectList.list);
export const selectChats = createSelector([selectChat], chat => chat.chats);
