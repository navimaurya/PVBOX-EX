import chatActionType from './chat-action-type'

const INITIAL_STATE_LIST = {
    list: [],
    error: null
}
const INITIAL_STATE_CHATS = {
    chats: {},
    error: null
}

const chatListReducer = (state = INITIAL_STATE_LIST, { type, payload }) => {
    switch (type) {
        case chatActionType.CHAT_LIST_FETCH_SUCCESS:
            return {
                ...state,
                list: payload,
                error: null
            }
        case chatActionType.CHAT_LIST_FETCH_FAILURE:
            return {
                ...state,
                // chats: null,
                // list: null,
                error: payload
            }
        default:
            return state
    }
}

const chatReducer = (state = INITIAL_STATE_CHATS, { type, payload }) => {
    switch (type) {
        case chatActionType.CHAT_FETCH_SUCCESS:
            return {
                ...state,
                chats: {
                    ...state.chats,
                    ...payload
                },
                error: null
            }
        case chatActionType.CHAT_SEND_START:
            return {
                ...state,
                chats: {
                    ...state.chats[payload.receiver].push({
                        message: payload.message,
                        _id: null
                    })
                },

                error: null
            }
        case chatActionType.ADD_NEW_MESSAGES_SUCCESS:
            let updatedChates = { ...state.chats };
            payload.forEach((data) => {
                if (!!state.chats[data._id]) {
                    updatedChates[data._id] = [
                        ...state.chats[data._id],
                        ...data.message
                    ]
                } else {
                    updatedChates[data._id] = [...data.message]
                }
            })
            return {
                ...state,
                chats: {
                    ...updatedChates
                },

                error: null
            }
        case chatActionType.CHAT_FETCH_FAILURE:
        case chatActionType.CHAT_LIST_FETCH_FAILURE:
            return {
                ...state,
                // chats: null,
                // chatList: null,
                error: payload
            }
        default:
            return state
    }
}

export { chatListReducer, chatReducer };