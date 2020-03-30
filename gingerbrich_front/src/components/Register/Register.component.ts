import Vue from "vue";
import Component from "vue-class-component";
import RegisterModule from "../../modules/RegisterModule";
import { EmailRules, isRequiredRule } from "../../plugins/validators";
import { } from './../../plugins/validators';

@Component({})
export default class RegisterComponent extends Vue {
  genderOption: string[] = ["Male", "Female"];
  password = "";
  email = "";
  address = "";
  phoneNumber:number|null=null;
  gender = "";
  idnumber:number|null = null;
  name = "";
  surname = "";
  confirmPassowrd = "";
  emailRule =EmailRules
  isRequiredRule=isRequiredRule

  submitRegisterUser() {
     RegisterModule.register({
      username: this.email,
      password: this.password,
      email: this.email,
      address: this.address,
      phoneNumber: this.phoneNumber,
      gender: this.gender,
      idNumber: this.idnumber,
      name: this.name,
      surname: this.surname
    }, "customer");
  }
}
