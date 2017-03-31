import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from './store/configureStore';
import {notificationNew} from './actions/notifications'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import moment from 'moment'

injectTapEventPlugin();

moment.locale('ru');

const store = configureStore({
  ui: {},
  notifications: [
    {
      id: 17,
      title: 'Test test test 17',
      unread: true,
      datetime: new Date(),
    },
    {
      id: 16,
      title: 'Test test test 16',
      unread: true,
      datetime: new Date().setHours((new Date()).getHours() - 2),
    },
    {
      id: 14,
      title: 'Test test test 14',
      unread: true,
      datetime: new Date().setDate((new Date()).getDate() - 1),
    },
    {
      id: 13,
      title: 'Test test test 13',
      unread: false,
      datetime: new Date().setDate((new Date()).getDate() - 3),
    },
    {
      id: 12,
      title: 'Test test test 12',
      unread: false,
      datetime: new Date().setDate((new Date()).getDate() - 8),
    },
    {
      id: 11,
      title: 'Test test test 11',
      unread: false,
      datetime: new Date().setDate((new Date()).getDate() - 31),
    },
    {
      id: 10,
      title: 'Test test test 10',
      unread: false,
      datetime: new Date().setDate((new Date()).getDate() - 160),
    }
  ]
});
const history = syncHistoryWithStore(browserHistory, store);

const source = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'.split(' ');

setInterval(() => {
  const rand = Math.floor(Math.random() * source.length);
  store.dispatch(notificationNew(source[rand]));
}, 20000);

const MOUNT_NODE = document.getElementById('root');
let render = () => {
  const routes = require('./routes').default;
  ReactDOM.render(
    <MuiThemeProvider>
      <Provider store={store}>
        <Router history={history} routes={routes}/>
      </Provider>
    </MuiThemeProvider>,
    MOUNT_NODE
  );
};

if (module.hot) {
  module.hot.accept('./routes', () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    render();
  })
}

render();