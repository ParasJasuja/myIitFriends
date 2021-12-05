import axios from "axios";

const API_URL = "http://localhost:8080/api/auth";
export async function login(email, role, password) {
  try {
    const usr = await axios.post(API_URL + "/signin", {
      email,
      role,
      password,
    });
    console.log(usr.data);
    console.log(usr);
    if (usr.data.accessToken) {
      localStorage.setItem("user", JSON.stringify(usr.data));
    }
    return usr.data;
  } catch (err) {
    return err.response.data;
  }
}

export function logout() {
  if (window.confirm("Are You sure to logout")) {
    localStorage.removeItem("user");
    window.location.reload(true);
  }
}

export async function signup(name, email, role, password) {
  let msj = await axios.post(API_URL + "/signup", {
    name,
    email,
    role,
    password,
  });
  console.log(msj);
  return msj;
}

export function getCurrentUser() {
  let usr = JSON.parse(localStorage.getItem("user"));
  return { ...usr };
}
