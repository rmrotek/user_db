import React from 'react';
import { ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@material-ui/core';
import { AccountBox } from '@material-ui/icons'

import { Link } from "react-router-dom";

interface Props {
   user: any
}

let UserItem = ({ user }: Props) => (

   <ListItem alignItems='flex-start' divider>
      <ListItemText
         primary={user.name}
         secondary={user.email} />
      <ListItemSecondaryAction >
         <IconButton color='primary' aria-label="Details" component={Link} to={`/users/${user.id}`}>
            <AccountBox />
         </IconButton>
      </ListItemSecondaryAction>
   </ListItem>

);

export default UserItem;