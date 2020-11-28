import { ActionTypes } from "../../util/constants";
import { StorageUtil } from "../../util/StorageUtil";

export function dispatchAndLog(dispatch: (arg0: any) => void, action: any) {
    console.log(action.type)
    if (action.type) {
        console.log(action.type)
    }
    dispatch(action)
}

// Usage like this.props.dispatch(updateUser(user))
export function updateUser(user: any) {
    return (dispatch: any) => StorageUtil.setUser(user).then(x => dispatchAndLog(dispatch, { type: ActionTypes.UPDATE_USER, user }))
}

export function clearAll() {
    console.log('Clearing the storage and global states')
    return (dispatch: any) => StorageUtil.clearAll().then(x => {
        dispatchAndLog(dispatch, { type: ActionTypes.CLEAR_ALL })
    })
}