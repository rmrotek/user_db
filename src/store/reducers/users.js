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

// export const deleteUser = userId => ({
//   type: DELETE_USER,
//   userId,
// });

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

export function requestUserDelete(userId) {
  return function (dispatch) {
    return fetch(`http://localhost:3001/users/${userId}`, {
      method: 'DELETE'
    })
      .then(() => dispatch(fetchUsers()))
  }
}

export function requestUserAdd(data) {
  return function (dispatch) {
    return fetch(`http://localhost:3001/users/`, {
      method: 'POST',
      body: JSON.stringify({
        name: data.name,
        username: data.username,
        email: data.email,
        address: {
          street: "Kulas Light",
          suite: "Apt. 556",
          city: "Gwenborough",
          zipcode: "92998-3874",
          geo: {
            lat: "-37.3159",
            lng: "81.1496"
          }
        },
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
        company: {
          name: "Romaguera-Crona",
          catchPhrase: "Multi-layered client-server neural-net",
          bs: "harness real-time e-markets"
        }
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(() => dispatch(fetchUsers()))
  }
}
export function requestUserEdit(data, userId) {
  return function (dispatch) {
    return fetch(`http://localhost:3001/users/${userId}`, {
      method: 'PATCH',
      body: JSON.stringify({
        name: data.name,
        username: data.username,
        email: data.email,
        address: {
          street: data.street,
          suite: data.suite,
          city: data.city,
          zipcode: data.zipcode,
        },
        phone: data.phone,
        website: data.website,
        company: {
          name: data.companyName,
          catchPhrase: data.companyCatchPhrase,
          bs: data.companyBs
        }
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(() => dispatch(fetchUsers()))
  }
}




const reducer = (state = {}, action) => {
  switch (action.type) {

    case REQUEST_USERS:
      return { ...state, loading: true };
    case RECEIVE_USERS:
      return { ...state, users: action.users, loading: false };
    // case DELETE_USER:
    //   return {users: state.users.filter(user => user.id !== action.userId)}
    default:
      return state;
  }
};

export default reducer