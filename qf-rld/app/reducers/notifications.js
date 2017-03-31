import {
  NOTIFICATION_NEW,
  MARK_AS_READ_ALL,
  CLEAR_NOTIFICATIONS
} from '../actions/notifications'

export default function notifications(state = [], action) {
  switch (action.type) {
    case NOTIFICATION_NEW:
      return [
        ...state, {
          title: action.title,
          datetime: action.datetime,
          unread: true
        }
      ];
    case MARK_AS_READ_ALL:
      return state.map(n => {
        if (!n.unread) return n;
        else return {
          ...n,
          unread: false
        }
      });
    case CLEAR_NOTIFICATIONS: {
      return []
    }
    default:
      return state
  }
}
