import axios from "axios";
export const axiosApi = axios.create({
  baseURL: "https://localhost:44346/api/"
});
axiosApi.defaults.headers.post["Content-Type"] = "application/json";

export function setJwt(jwt: string) {
  axiosApi.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
  
}

export function clearJwt() {
  delete axiosApi.defaults.headers.common["Authorization"];
}
