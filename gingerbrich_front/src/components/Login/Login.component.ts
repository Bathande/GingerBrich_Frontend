import { EmailRules,isRequiredRule } from './../../plugins/validators';
import Vue from "vue";
import Component from "vue-class-component";
import LoginModule from "../../modules/LoginModule";
@Component({})
export default class LoginComponent extends Vue {
  userName = "";
  password = "";
  EmailRules = EmailRules;
  isRequiredRule = isRequiredRule;

  submitLoginUsser() {
    LoginModule.login({ username: this.userName, password: this.password });
  }
}
