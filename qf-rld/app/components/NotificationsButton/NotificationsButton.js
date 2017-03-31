import React, {Component, PropTypes} from 'react'
import ReactDOM from 'react-dom';
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import Popover from 'material-ui/Popover';
import Divider from 'material-ui/Divider';
import {List, ListItem} from 'material-ui/List';
import moment from 'moment'
import cx from 'classnames'

import s from './NotificationsButton.css'

let button;
export const NotificationsButton = (props) => {
  const {count, opened, visibleNotifications, popupHide, popupShow, markAsReadAll} = props;

  const handleButtonTap = (event) => {
    event.preventDefault();
    markAsReadAll();
    popupShow();
  };

  const handleShowAll = (event) => {
    event.preventDefault();
    popupHide();
  };

  return (
    <Badge
      badgeContent={count}
      secondary={true}
      badgeStyle={{
        top: 12, right: 12,
        visibility: count == 0 ? 'hidden': 'visible'
      }}
    >
      <IconButton
        disabled={visibleNotifications.length == 0}
        onTouchTap={handleButtonTap}
        ref={node => button = ReactDOM.findDOMNode(node)}
        iconStyle={{color: 'white'}}
      >
        <NotificationsIcon/>
      </IconButton>
      {/*todo: animated={false} this causes an error in console when closed from menu item*/}
      <Popover
        className={s.opened}
        open={opened}
        anchorEl={button}
        anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
        targetOrigin={{horizontal: 'left', vertical: 'top'}}
        onRequestClose={popupHide}
        animated={false}
      >
        <List>
          {visibleNotifications.map(n =>
            <ListItem
              key={n.datetime}
              primaryText={n.title}
              secondaryText={moment(n.datetime).fromNow()}/>
          )}
          <Divider/>
          <ListItem
            onTouchTap={handleShowAll}
            primaryText="Посмотреть все" />
        </List>
      </Popover>
    </Badge>
  )
};

NotificationsButton.propTypes = {
  popupHide: PropTypes.func.isRequired,
  popupShow: PropTypes.func.isRequired,
  markAsReadAll: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
  opened: PropTypes.bool,
  visibleNotifications: PropTypes.array.isRequired
};

export default NotificationsButton