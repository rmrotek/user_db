// export interface Geo {
//   lat: string;
//   lng: string;
// }

// export interface Address {
//   street: string;
//   suite: string;
//   city: string;
//   zipcode: string;
//   geo: Geo;
// }

// export interface Company {
//   name: string;
//   catchPhrase: string;
//   bs: string;
// }

// export interface Users {
//   id: number;
//   name: string;
//   username: string;
//   email: string;
//   address: Address;
//   phone: string;
//   website: string;
//   company: Company;
// }



export const REQUEST_USERS = 'REQUEST_USERS';
export const RECEIVE_USERS = 'RECEIVE_USERS';
export const DELETE_USER = 'DELETE_USER';

export const requestUsers = () => ({
  type: REQUEST_USERS,
});

export const receivedUsers = data => ({
  type: RECEIVE_USERS,
  users: data,
});


const reducer = (state = {}, action) => {
  switch (action.type) {
    case REQUEST_USERS:
      return { ...state, loading: true };
    case RECEIVE_USERS:
      return { ...state, users: action.users, loading: false };
    default:
      return state;
  }
};

export default reducer