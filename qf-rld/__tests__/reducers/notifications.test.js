import * as actions from '../../app/actions/notifications'
import reducer from '../../app/reducers/notifications'
import deepFreeze from 'deep-freeze'

describe('reducers.notifications', () => {
  it('should return default state', () => {
    expect(reducer(undefined, {})).toEqual([])
  });

  it('should handle NOTIFICATION_NEW', () => {
    const datetime = 1;
    expect(reducer(deepFreeze([]), {
      type: actions.NOTIFICATION_NEW,
      title: 'text',
      datetime
    })).toEqual([{
      title: 'text', datetime, unread: true
    }]);

    const datetime2 = 2;
    expect(reducer(deepFreeze([{
      title: 'text', datetime, unread: true
    }]), {
      type: actions.NOTIFICATION_NEW,
      title: 'text',
      datetime: datetime2
    })).toEqual([{
      title: 'text', datetime, unread: true
    }, {
      title: 'text', datetime: datetime2, unread: true
    }])
  });

  it('should handle MARK_AS_READ_ALL', () => {
    expect(reducer(deepFreeze([{
      title: 'text', datetime: 1, unread: true
    }, {
      title: 'text', datetime: 2, unread: false
    }, {
      title: 'text', datetime: 3, unread: true
    }]), {
      type: actions.MARK_AS_READ_ALL
    })).toEqual([{
      title: 'text', datetime: 1, unread: false
    }, {
      title: 'text', datetime: 2, unread: false
    }, {
      title: 'text', datetime: 3, unread: false
    }])
  });

  it('should handle CLEAR_NOTIFICATIONS', () => {
    expect(reducer(deepFreeze([{
      title: 'text', datetime: 1, unread: true
    }, {
      title: 'text', datetime: 2, unread: false
    }]), {
      type: actions.CLEAR_NOTIFICATIONS
    })).toEqual([])
  })
});
