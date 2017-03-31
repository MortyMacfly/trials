import {POPUP_SHOW, POPUP_HIDE} from '../actions/ui'

const init = () => ({
  popupOpened: false
});

export default function (state = init(), action) {
  switch(action.type) {
    case POPUP_SHOW:
      return {
        popupOpened: true
      };
    case POPUP_HIDE:
      return {
        popupOpened: false
      };
    default:
      return state
  }
}