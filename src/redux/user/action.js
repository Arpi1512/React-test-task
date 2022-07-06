export function changeUser({ login, password }) {
  return {
    type: "changeUser",
    payload: {
      login,
      password,
    },
  };
}
export function logOut() {
    return {
      type: "logout",
     
    };
  }