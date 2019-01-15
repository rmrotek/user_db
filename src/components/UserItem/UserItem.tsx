import React from 'react';
import { ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@material-ui/core';
import { AccountBox } from '@material-ui/icons'

import {CustomLink} from '../CustomLink/CustomLink'
interface Props {
   user: any
}


let UserItem = ({ user }: Props) => (

   <ListItem  divider>
      <ListItemText
         primary={user.name}
         secondary={user.email} />
      <ListItemSecondaryAction >
         <IconButton color='primary' aria-label="Details" component={CustomLink} id={user.id}>
            <AccountBox />
         </IconButton>
      </ListItemSecondaryAction>
   </ListItem>

);

export default UserItem;