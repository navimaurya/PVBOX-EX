import openChatActionType from "./open-chat-action-type";

const INITIAL_STATE = {
    friend: null,
    error: null
}

const opeChatReducer = (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case openChatActionType.CHAT_OPEN_START:
            return {
                ...state,
                friend: payload
            }
        case openChatActionType.CHAT_OPEN_FAILURE:
            return {
                ...state,
                friend: null,
                error: payload
            }

        default:
            return state;
    }
}

export default opeChatReducer;