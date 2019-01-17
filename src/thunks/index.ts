import { Action } from "redux";
import { ThunkAction } from "redux-thunk";

import { IFormValues } from "../components/EditUserForm/EditUserForm";
import { FormValues } from "../components/AddUserForm/AddUserForm";

import { receivedUsers } from "../store/reducers/actions"
import { deleteUser, getUsers, addUser, editUser } from "../services";

export function requestUserDelete(
  userId: number,
  handleSuccess: () => void
): ThunkAction<void, null, null, Action> {
  return function (dispatch) {
    return deleteUser(userId)
      .then(() => dispatch(fetchUsers()))
      .then(handleSuccess)
  }
}

export function fetchUsers(): ThunkAction<void, null, null, Action> {
  return function (dispatch) {
    return getUsers()
      .then((json) => {
        dispatch(receivedUsers(json));
      }
      );
  };
}

export function requestUserAdd(
  data: FormValues,
  handleSuccess: () => void
): ThunkAction<void, null, null, Action> {
  return function (dispatch) {
    return addUser(data)
      .then(() => dispatch(fetchUsers()))
      .then(handleSuccess)
  }
}

export function requestUserEdit(
  data: IFormValues,
  userId: number,
  handleSuccess: () => void
): ThunkAction<void, null, null, Action> {
  return function (dispatch) {
    return editUser(data, userId)
      .then(() => dispatch(fetchUsers()))
      .then(handleSuccess)
  }
}