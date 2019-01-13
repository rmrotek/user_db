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


export const SELECT_CHANNEL = 'SELECT_CHANNEL';
export const REQUEST_USERS = 'REQUEST_USERS';
export const RECEIVE_USERS = 'RECEIVE_USERS';

export const requestUsers = () => ({
  type: REQUEST_USERS,
});

export const receivedUsers = data => ({
  type: RECEIVE_USERS,
  users: data,
});

export function fetchUsers() {
  return function (dispatch) {
    dispatch(requestUsers());
    return fetch(`http://localhost:3001/users`)
      .then(
        response => response.json(),
        error => console.log('An error occurred.', error),
      )
      .then((json) => {
        dispatch(receivedUsers(json));
      },
      );
  };
}





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