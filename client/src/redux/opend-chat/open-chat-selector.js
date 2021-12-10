import { createSelector } from "reselect";

const openChat = state => state.openChat;

export const selectOpenChatFriend = createSelector([openChat], openChat => openChat.friend);