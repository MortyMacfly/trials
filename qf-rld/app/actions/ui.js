export const POPUP_SHOW = 'POPUP_SHOW';
export const POPUP_HIDE = 'POPUP_HIDE';

export const popupShow = () =>
  (dispatch, getState) => {
    const {notifications} = getState();
    if (notifications.length) {
      dispatch({
        type: POPUP_SHOW
      })
    }
  };

export const popupHide = () => ({
  type: POPUP_HIDE
});

export const popupToggle = () =>
  (dispatch, getState) => {
    const {ui} = getState();
    if (!ui.popupOpened) dispatch(popupShow());
    else dispatch(popupHide());
  };
