import Vue from "vue";
import Component from "vue-class-component";
import RegisterModule from "../../modules/RegisterModule";
import { EmailRules, isRequiredRule } from "../../plugins/validators";
import {} from "./../../plugins/validators";

@Component({})
export default class RegisterComponent extends Vue {
  genderOption: string[] = ["Male", "Female"];
  password = "";
  email = "";
  phoneNumber: number | null = null;
  gender = "";
  name = "";
  surname = "";
  confirmPassowrd = "";
  emailRule = EmailRules;
  isRequiredRule = isRequiredRule;

  submitRegisterUser() {
    RegisterModule.register(
      {
        username: this.email,
        password: this.password,
        email: this.email,
        phoneNumber: this.phoneNumber,
        gender: this.gender,
        name: this.name,
        surname: this.surname
      },
      "customer"
    );
  }
}
