import { API } from "../config";
export const authenticate = (user) => {
  if (typeof window !== "undefined") {
    localStorage.setItem('user', JSON.stringify(user));
  }
};
export const isAuthenticated = () => {
  if (typeof window === "undefined") return false;
  if (localStorage.getItem("user")) {
    return JSON.parse(localStorage.getItem("user"));
  } else {
    return false;
  }
};
export const signOut = (next) => {
  if (typeof window != "undefined") {
    localStorage.removeItem('user');
    next();
    return fetch(`${ API } / signout`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .catch(error => console.log(error))
  }
}