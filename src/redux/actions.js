import { CREATE_USER, REMOVE_USER, INCREASE, DECREASE } from "./types";

export function createUser(user) {
  return {
    type: CREATE_USER,
    payload: user,
  };
}

export function removeUser(id) {
  return {
    type: REMOVE_USER,
    payload: id,
  };
}

export function increase(users, type) {
  return {
    type: INCREASE,
    payload: users.sort((a, b) => (a[type] < b[type] ? -1 : 1)),
  };
}

export function decrease(users, type) {
  return {
    type: DECREASE,
    payload: users.sort((a, b) => (a[type] > b[type] ? -1 : 1)),
  };
}
