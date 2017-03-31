export const NOTIFICATION_NEW = 'NOTIFICATION_NEW';
export const CLEAR_NOTIFICATIONS = 'CLEAR_NOTIFICATIONS';
export const MARK_AS_READ_ALL = 'MARK_AS_READ_ALL';

export const notificationNew = (title, datetime = Date.now()) =>
  (dispatch, getState) => {
    const {ui, notifications} = getState();
    dispatch({
      id: notifications.reduce((maxId, n) => Math.max(n.id, maxId), -1) + 1,
      type: NOTIFICATION_NEW,
      title,
      datetime
    });
    if (ui.popupOpened) {
      dispatch(markAsReadAll())
    }
  };

export const clearNotifications = () => ({
  type: CLEAR_NOTIFICATIONS
});

export const markAsReadAll = () => ({
  type: MARK_AS_READ_ALL
});