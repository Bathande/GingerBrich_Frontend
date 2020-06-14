import { CustomerInterface } from "./../Interfaces/CustomerInterface";
import { axiosApi, setJwt } from "./axiosDefaultSetting";
export async function registerUser(
  RegisterUser: CustomerInterface,
  usertype: number
): Promise<CustomerInterface | undefined> {
  try {
    const responce = await axiosApi.post(
      `Register/registration/${usertype}`,
      RegisterUser
    );
    setJwt(responce.data.token);
    return responce.data.user;
  } catch (e) {
    console.error(e);
  }
}
