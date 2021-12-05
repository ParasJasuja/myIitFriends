import userEvent from "@testing-library/user-event";
import axios from "axios";
import authHeader from "./authHeader";

const API_URL = "http://localhost:8080/api/";

export function getUser() {
  return axios.get(API_URL + userEvent, {
    headers: authHeader(),
  });
}
