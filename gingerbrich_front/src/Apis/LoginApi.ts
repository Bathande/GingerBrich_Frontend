import { axiosApi, setJwt } from "./axiosDefaultSetting";
import {
  UserLogin,
  CustomerInterface
} from "./../Interfaces/CustomerInterface";
import router from "../router/index";
export async function loginUser(
  user: UserLogin
): Promise<CustomerInterface | undefined> {
  const responce = await axiosApi.post("Customer/Login", user);
  if (responce.status == 200) {
    setJwt(responce.data.token);
    router.push("/dashboard");
    return responce.data.user;
  } else {
    return responce.data.message;
  }
}
