import { CustomerInterface } from "./../Interfaces/CustomerInterface";
import { axiosApi, setJwt } from "./axiosDefaultSetting";
import router from "../router/index";

export async function registerUser(
  RegisterUser: CustomerInterface,
  usertype: number
): Promise<CustomerInterface | undefined> {
  try {
    const responce = await axiosApi.post(
      `Register/registration/${usertype}`,
      RegisterUser
    );
    if (responce.status === 200 || responce.status === 201) {
      router.push("/dashboard")
    }
    setJwt(responce.data.token);
    return responce.data.user;
  } catch (e) {
    console.error(e);
  }
}
