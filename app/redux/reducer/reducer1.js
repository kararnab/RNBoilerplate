import {ActionTypes} from '../../util/constants';

export default function reducer(initialState = {}, action) {
  switch (action.type) {
    case ActionTypes.CLEAR_ALL:
      return {};
    case ActionTypes.UPDATE_USER:
      return {...initialState, user: action.user};
    case ActionTypes.UPDATE_APP:
      return {...initialState, ...{updateApp: true}};
    case ActionTypes.UNREAD_CHAT:
      return {...initialState, unreadChatCount: action.unreadCount};
    default:
      return initialState;
  }
}
