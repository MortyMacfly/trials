import configureMockStore from 'redux-mock-store'
import * as actions from '../../app/actions/ui'
import thunk from 'redux-thunk'

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

describe('actions.ui', () => {
  it(`shouldn't show popup if no notifications`, () => {
    const expectedAction = [];
    const store = mockStore({ notifications: [] });

    store.dispatch(actions.popupShow());
    expect(store.getActions()).toEqual(expectedAction)
  });

  it('should show popup if any notifications', () => {
    const expectedAction = [{
      type: actions.POPUP_SHOW
    }];
    const store = mockStore({ notifications: [{}] });

    store.dispatch(actions.popupShow());
    expect(store.getActions()).toEqual(expectedAction)
  });

  it('should create action that hides popup', () => {
    const expectedAction = {
      type: actions.POPUP_HIDE,
    };
    expect(actions.popupHide()).toEqual(expectedAction)
  });

  it('should show popup when hidden', () => {
    const expectedAction = [{
      type: actions.POPUP_SHOW
    }];
    const store = mockStore({
      ui: { popupOpened: false },
      notifications: [{}]
    });

    store.dispatch(actions.popupToggle());
    expect(store.getActions()).toEqual(expectedAction)
  });

  it('should hide popup when visible', () => {
    const expectedAction = [{
      type: actions.POPUP_HIDE
    }];
    const store = mockStore({
      ui: { popupOpened: true },
      notifications: [{}]
    });

    store.dispatch(actions.popupToggle());
    expect(store.getActions()).toEqual(expectedAction)
  })
});
