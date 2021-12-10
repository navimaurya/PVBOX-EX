import chatActionType from "./chat-action-type";

// CHAT
export const chatFetchStart = (friend) => ({
    type: chatActionType.CHAT_FETCH_START,
    payload: friend
})

export const chatFetchSuccess = chats => ({
    type: chatActionType.CHAT_FETCH_SUCCESS,
    payload: chats
})

export const chatFetchFailure = (error) => ({
    type: chatActionType.CHAT_FETCH_START,
    payload: error
})

// CHAT List
export const chatListFetchStart = () => ({
    type: chatActionType.CHAT_LIST_FETCH_START
})

export const chatListFetchSuccess = chats => ({
    type: chatActionType.CHAT_LIST_FETCH_SUCCESS,
    payload: chats
})

export const chatListFetchFailure = (error) => ({
    type: chatActionType.CHAT_LIST_FETCH_FAILURE,
    payload: error
})

// CHATS 
export const friendChatFetchStart = () => ({
    type: chatActionType.CHAT_LIST_FETCH_START
})

export const friendChatFetchSuccess = chats => ({
    type: chatActionType.CHAT_LIST_FETCH_SUCCESS,
    payload: chats
})

export const friendChatFetchFailure = (error) => ({
    type: chatActionType.CHAT_LIST_FETCH_FAILURE,
    payload: error
})

// Send messge 
export const chatSendStart = (receiver, message) => ({
    type: chatActionType.CHAT_SEND_START,
    payload: { receiver, message }
})

export const chatSendSuccess = () => ({
    type: chatActionType.CHAT_SEND_SUCCESS,
    payload: null
})

export const chatSendFailure = (error) => ({
    type: chatActionType.CHAT_SEND_FAILURE,
    payload: error
})

export const addNewMessagesStart = () => ({
    type: chatActionType.ADD_NEW_MESSAGES_START,
})
export const addNewMessagesSuccess = (messages) => ({
    type: chatActionType.ADD_NEW_MESSAGES_SUCCESS,
    payload: messages
})

