import React from 'react';
import { ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@material-ui/core';
import { AccountBox } from '@material-ui/icons'

import { Link } from "react-router-dom";

interface Props {
   user: any
}
const MyLink = (props: any) => <Link to={`/users/${props.id}`} {...props}/>


let UserItem = ({ user }: Props) => (

   <ListItem  divider>
      <ListItemText
         primary={user.name}
         secondary={user.email} />
      <ListItemSecondaryAction >
         <IconButton color='primary' aria-label="Details" component={MyLink} id={user.id}>
            <AccountBox />
         </IconButton>
      </ListItemSecondaryAction>
   </ListItem>

);

export default UserItem;