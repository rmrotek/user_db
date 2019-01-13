import React from 'react';
import { ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@material-ui/core';
import { AccountBox } from '@material-ui/icons'

const UserItem = ({ user }) => (

   <ListItem >
      <ListItemText
         primary={user.name}
         secondary={user.email} />
      <ListItemSecondaryAction>
         <IconButton aria-label="Delete">
            <AccountBox />
         </IconButton>
      </ListItemSecondaryAction>

   </ListItem>

);

export default UserItem;