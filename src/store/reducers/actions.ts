import { action } from 'typesafe-actions'

import { RECEIVE_USERS } from './constants'

import { IUsers } from './users'

export const receivedUsers = (data: IUsers) => action(RECEIVE_USERS, data);
