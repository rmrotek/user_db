import React from 'react';
import { ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@material-ui/core';
import { AccountBox } from '@material-ui/icons'

const UserItem = ({ user }) => (

   <ListItem alignItems='flex-start' divider>
      <ListItemText
         primary={user.name}
         secondary={user.email} />
      <ListItemSecondaryAction>
         <IconButton color='primary' aria-label="Details">
            <AccountBox />
         </IconButton>
      </ListItemSecondaryAction>

   </ListItem>

);

export default UserItem;