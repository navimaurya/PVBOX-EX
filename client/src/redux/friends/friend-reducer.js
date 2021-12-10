import friendActionType from "./friend-action-type";

const INITIAL_STATE = {
    list: []
}

const friendReducer = (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case friendActionType.ADD_NEW_FRIEND_SUCCESS:
            return {
                ...state,
                list: [...state.list, ...payload].sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase()) ? 1 : ((b.name > a.name) ? -1 : 0, { friend: { name: '' } })
                )
            }
        case friendActionType.GET_FRIEND_LIST_SUCCESS:
            return {
                ...state,
                list: [...state.list, ...payload]
            }

        default:
            return state;
    }
}

export default friendReducer;