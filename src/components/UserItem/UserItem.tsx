import React from 'react';

import { ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@material-ui/core';
import { AccountBox } from '@material-ui/icons'

import {CustomLink} from '../CustomLink/CustomLink'

import {IUsers} from '../../store/reducers/users'
interface Props {
   user: IUsers
}

let UserItem = ({ user }: Props) => (
   <ListItem  divider>
      <ListItemText
         primary={user.name}
         secondary={user.email} />
      <ListItemSecondaryAction >
         <IconButton color='primary' aria-label="Details" component={CustomLink} id={`${user.id}`}>
            <AccountBox />
         </IconButton>
      </ListItemSecondaryAction>
   </ListItem>
);

export default UserItem;