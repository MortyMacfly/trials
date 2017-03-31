import React, {PropTypes} from 'react'
import NotificationsButtonContainer from 'containers/NotificationsButtonContainer'
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

import 'normalize.css'
import s from './Main.css'

let notificationContent;
export const Main = ({notificationNew, clearNotifications, markAsReadAll, popupToggle}) => {
  function handleSend(event) {
    event.preventDefault();
    notificationNew(notificationContent.value);
    notificationContent.value = ''
  }

  return (
    <div>
      <AppBar
        showMenuIconButton={false}
        iconElementRight={
          <NotificationsButtonContainer/>
        }
      />
      <div className={s.form}>
        <div>
          <TextField
            hintText='Введите название события'
            ref={node => notificationContent = node.input}/>
          <FlatButton label="Отправить" onTouchTap={handleSend}/>
        </div>
        <div>
          <RaisedButton
            label="Пометить все события прочитанными"
            onTouchTap={markAsReadAll}
          />
        </div>
        <div>
          <RaisedButton
            label="Удалить все события"
            onTouchTap={clearNotifications}
          />
        </div>
        <div>
          <RaisedButton
            label="Скрыть/показать попап нотификации"
            onTouchTap={popupToggle}
          />
        </div>
      </div>
    </div>
  )
};

Main.propTypes = {
  notificationNew: PropTypes.func.isRequired,
  clearNotifications: PropTypes.func.isRequired,
  markAsReadAll: PropTypes.func.isRequired,
  popupToggle: PropTypes.func.isRequired
};

export default Main