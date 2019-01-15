import { receivedUsers } from "../store/reducers/actions"
import { IFormValues } from "../components/EditUserForm/EditUserForm";
import { ThunkAction } from "redux-thunk";
import { Action } from "redux";



export function requestUserDelete(
  userId: number
): ThunkAction<void, null, null, Action> {
  return function (dispatch) {
    return fetch(`http://localhost:3001/users/${userId}`, {
      method: 'DELETE'
    })
      .then(() => dispatch(fetchUsers()))
  }
}


export function fetchUsers(): ThunkAction<void, null, null, Action> {
  return function (dispatch) {
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

export function requestUserAdd(
  data: IFormValues
): ThunkAction<void, null, null, Action> {
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



export function requestUserEdit(
  data: IFormValues,
  userId: number
): ThunkAction<void, null, null, Action> {
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
          geo: {
            lat: data.geoLat,
            lng: data.geoLng
          }
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