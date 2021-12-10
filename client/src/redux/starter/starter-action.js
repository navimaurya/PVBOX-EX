import appStarterActionType from "./starter-action-type";

export const appStarterStart = () => ({
    type: appStarterActionType.APP_STARTER_START
})
export const appStarterSuccess = () => ({
    type: appStarterActionType.APP_STARTER_SUCCESS
})
export const appStarterFailure = () => ({
    type: appStarterActionType.APP_STARTER_FAILURE
})