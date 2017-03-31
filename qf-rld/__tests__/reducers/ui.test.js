import * as actions from '../../app/actions/ui'
import reducer from '../../app/reducers/ui'
import deepFreeze from 'deep-freeze'

describe('reducers.ui', () => {
  it('should return default state', () => {
    expect(reducer(undefined, {})).toEqual({
      popupOpened: false
    })
  });

  it('should handle POPUP_SHOW', () => {
    expect(reducer(deepFreeze({
      popupOpened: false
    }), {
      type: actions.POPUP_SHOW
    })).toEqual({
      popupOpened: true
    })
  });

  it('should handle POPUP_HIDE', () => {
    expect(reducer(deepFreeze({
      popupOpened: true
    }), {
      type: actions.POPUP_HIDE
    })).toEqual({
      popupOpened: false
    })
  })
});
