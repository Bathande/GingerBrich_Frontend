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
import { CustomerInterface } from "./../Interfaces/CustomerInterface";

@Module({
  namespaced: true,
  name: "RegisterModule",
  store,
  dynamic: true
})
class RegisterModule extends VuexModule {
  user: CustomerInterface | null = null;

  @MutationAction({ mutate: ["user"] })
  async register(customer: CustomerInterface, usertype: string) {
    const user: CustomerInterface | undefined = await registerUser(
      customer,
      usertype
    );
    return { user };
  }
}

export default getModule(RegisterModule);
