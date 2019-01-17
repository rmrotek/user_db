import { ActionType } from 'typesafe-actions';

import { RECEIVE_USERS } from './constants'

import * as actions from './actions'

export type UsersAction = ActionType<typeof actions>

export interface Geo {
  lat: string;
  lng: string;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface IUsers {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

const reducer = (state: IUsers[] = [], action: UsersAction) => {
  switch (action.type) {
    case RECEIVE_USERS:
      return { ...state, users: action.payload };
    default:
      return state;
  }
};

export default reducer