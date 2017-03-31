import configureMockStore from 'redux-mock-store'
import * as actions from '../../app/actions/notifications'
import thunk from 'redux-thunk'

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

describe('actions.notifications', () => {
  it('should create an action to add new notification', () => {
    const title = 'test';
    const datetime = Date.now();

    const store = mockStore({
      notifications: [],
      ui: {popupOpened: false}
    });
    const expectedActions = [{
      id: 0,
      type: actions.NOTIFICATION_NEW,
      title,
      datetime
    }];

    store.dispatch(actions.notificationNew(title, datetime));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should create an action to add new notification and mark it if needed', () => {
    const title = 'test';
    const datetime = Date.now();

    const store = mockStore({
      notifications: [],
      ui: {popupOpened: true}
    });
    const expectedActions = [{
      id: 0,
      type: actions.NOTIFICATION_NEW,
      title,
      datetime
    }, {
      type: actions.MARK_AS_READ_ALL,
    }];

    store.dispatch(actions.notificationNew(title, datetime));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should create an action to clear notifications', () => {
    const expectedAction = {
      type: actions.CLEAR_NOTIFICATIONS,
    };
    expect(actions.clearNotifications()).toEqual(expectedAction)
  });

  it('should create an action to mark all as read', () => {
    const expectedAction = {
      type: actions.MARK_AS_READ_ALL,
    };
    expect(actions.markAsReadAll()).toEqual(expectedAction)
  })
});
