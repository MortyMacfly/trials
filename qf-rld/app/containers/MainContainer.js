import {connect} from 'react-redux'
import Main from '../components/Main'
import {
  notificationNew,
  clearNotifications,
  markAsReadAll
} from '../actions/notifications'
import {popupToggle} from '../actions/ui'

export default connect(null, {
  notificationNew,
  clearNotifications,
  markAsReadAll,
  popupToggle
})(Main)