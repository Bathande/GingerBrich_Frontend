import store from "@/store";
import {
  Action,
  getModule,
  Module,
  Mutation,
  VuexModule,
  MutationAction
} from "vuex-module-decorators";
import { registerUser } from "../Apis/RegisterApi";
import { CustomerInterface, UserType } from "./../Interfaces/CustomerInterface";

@Module({
  namespaced: true,
  name: "RegisterModule",
  store,
  dynamic: true
})
class RegisterModule extends VuexModule {
  user: CustomerInterface | null = null;

  @MutationAction({ mutate: ["user"] })
  async register(customer: CustomerInterface, usertype: UserType) {
    const user: CustomerInterface | undefined = await registerUser(
      customer,
      1
    );
    return { user };
  }
}

export default getModule(RegisterModule);
