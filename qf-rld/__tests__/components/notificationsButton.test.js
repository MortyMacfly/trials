import React from 'react'
import { shallow } from 'enzyme'
import Main from '../../app/components/Main'
import NotificationsButton from '../../app/components/NotificationsButton'
import configureStore from '../../app/store/configureStore';
import { Provider } from 'react-redux';

function setup(count, visibleItems) {
  const props = {
    popupHide: jest.fn(),
    popupShow: jest.fn(),
    markAsReadAll: jest.fn(),
    count: count,
    opened: true,
    visibleNotifications: visibleItems
  };

  const enzymeWrapper = shallow(<NotificationsButton {...props} />);

  return {
    props,
    enzymeWrapper
  }
}

describe('components.notifications', () => {
  it('should render self and subcomponents', () => {
    const { enzymeWrapper } = setup(0, [{id: 1, title: 'foo', datetime: 1, unread: false}]);

    const badge = enzymeWrapper.find('Badge');
    const badgeProps = badge.props();
    expect(badgeProps.badgeContent).toBeDefined();
    expect(badgeProps.secondary).toBe(true);
    expect(badgeProps.badgeStyle.visibility).toBe('hidden');

    const notifications = badge.find('IconButton');
    const notificationsProps = notifications.props();
    expect(notificationsProps.disabled).toBe(false);

    badge.find('Popover');
  });

  it('should render badge when has unread', () => {
    const { enzymeWrapper } = setup(1, []);
    const badgeProps = enzymeWrapper.find('Badge').props();
    expect(badgeProps.badgeStyle.visibility).toBe('visible');
  });

  it('should be disabled when empty', () => {
    const { enzymeWrapper } = setup(0, []);
    const badge = enzymeWrapper.find('Badge');
    const props = badge.find('IconButton').props();
    expect(props.disabled).toBe(true);
  });
});