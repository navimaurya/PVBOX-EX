import friendActionType from "./friend-action-type"

// 
export const addNewFriendStart = (user) => ({
    type: friendActionType.ADD_NEW_FRIEND_START,
    payload: user
});
export const addNewFriendSuccess = (user) => ({
    type: friendActionType.ADD_NEW_FRIEND_SUCCESS,
    payload: user
});
export const addNewFriendFailure = (error) => ({
    type: friendActionType.ADD_NEW_FRIEND_FAILURE,
    payload: error
});

// 
export const getFriendListStart = () => ({
    type: friendActionType.GET_FRIEND_LIST_START,
});

export const getFriendListSuccess = (list) => ({
    type: friendActionType.GET_FRIEND_LIST_SUCCESS,
    payload: list
});
export const getFriendListFailure = (error) => ({
    type: friendActionType.GET_FRIEND_LIST_FAILURE,
    payload: error
});