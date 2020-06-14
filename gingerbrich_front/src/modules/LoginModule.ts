import {
  CustomerInterface,
  UserLogin
} from "./../Interfaces/CustomerInterface";
import {
  VuexModule,
  getModule,
  Module,
  MutationAction
} from "vuex-module-decorators";
import { loginUser } from "../Apis/LoginApi";
import store from "@/store";
import router from "../router/index";
@Module({
  namespaced: true,
  name: "LoginModule",
  store,
  dynamic: true
})
class LoginModule extends VuexModule {
  user: CustomerInterface | null = null;

  @MutationAction({ mutate: ["user"] })
  async login(userLoggin: UserLogin) {
    const user: CustomerInterface | string = await loginUser(userLoggin);
    return { user };
  }
}

export default getModule(LoginModule);
