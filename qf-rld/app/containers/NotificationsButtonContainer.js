import {connect} from 'react-redux'
import NotificationsButton from '../components/NotificationsButton'
import {popupShow, popupHide} from '../actions/ui'
import {markAsReadAll} from '../actions/notifications'

export function mapStateToProps(state) {
  const {notifications, ui} = state;
  const visibleNotifications = notifications
    .sort((a, b) => b.datetime - a.datetime)
    .slice(0, 5);
  return {
    visibleNotifications,
    count: notifications
      .filter(n => n.unread)
      .length,
    opened: ui.popupOpened
  }
}

export default connect(mapStateToProps, {
  popupShow,
  popupHide,
  markAsReadAll
})(NotificationsButton)