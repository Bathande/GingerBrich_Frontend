import { axiosApi, setJwt } from "./axiosDefaultSetting";
import {
  UserLogin,
  CustomerInterface
} from "./../Interfaces/CustomerInterface";

export async function loginUser(
  user: UserLogin
): Promise<CustomerInterface | undefined> {
  const responce = await axiosApi.post("Customer/Login", user);
  setJwt(responce.data.token);
  return responce.data.user;
}
