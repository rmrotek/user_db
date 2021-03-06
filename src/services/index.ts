import { IUsers } from "../store/reducers/users";
import { FormValues } from "../components/AddUserForm/AddUserForm";
import { IFormValues } from "../components/EditUserForm/EditUserForm";


export const deleteUser = (userId: number): Promise<Response> => fetch(`http://localhost:3001/users/${userId}`, {
  method: 'DELETE'
})

export const getUsers = (): Promise<IUsers> => fetch('http://localhost:3001/users')
  .then(
    response => response.json(),
    error => console.log('An error occurred.', error),
  )

export const addUser = (data: FormValues): Promise<Response> => fetch(`http://localhost:3001/users/`, {
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

export const editUser = (
  data: IFormValues,
  userId: number,
): Promise<Response> => fetch(`http://localhost:3001/users/${userId}`, {
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
