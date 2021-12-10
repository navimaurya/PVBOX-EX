import openChatActionType from "./open-chat-action-type";

// action
export const openChatStart = (id) => ({
    type: openChatActionType.CHAT_OPEN_START,
    payload: id
})

export const openChatSuccess = chats => ({
    type: openChatActionType.CHAT_OPEN_SUCCESS,
    payload: chats
})

export const openChatFailure = (error) => ({
    type: openChatActionType.CHAT_OPEN_FAILURE,
    payload: error
})
