import React from 'react'
import { shallow } from 'enzyme'
import Main from '../../app/components/Main'
import NotificationsButtonContainer from '../../app/containers/NotificationsButtonContainer'
import configureStore from '../../app/store/configureStore';
import { Provider } from 'react-redux';

function setup() {
  const props = {
    notificationNew: jest.fn(),
    clearNotifications: jest.fn(),
    markAsReadAll: jest.fn(),
    popupToggle: jest.fn()
  };

  const enzymeWrapper = shallow(<Main {...props} />);

  return {
    props,
    enzymeWrapper
  }
}

describe('components.main', () => {
  it('should render self and subcomponents', () => {
    const { enzymeWrapper } = setup();

    const appBarProps = enzymeWrapper.find('AppBar').props();
    expect(appBarProps.showMenuIconButton).toBe(false);

    const notificatinsButton = shallow(
      <Provider store={configureStore()}>
        {appBarProps.iconElementRight}
      </Provider>
    );
    expect(notificatinsButton.contains(<NotificationsButtonContainer/>)).toEqual(true);
  });
});