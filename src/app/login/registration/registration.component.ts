import {Component} from '@angular/core';
import {LoginService, UserRequest} from "../../service/LoginService";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  email: string = '';
  nickname: string = '';
  firstName: string = '';
  lastName: string = '';
  password: string = '';

  constructor(private api: LoginService) {
  }

  /** Registers user. */
  register() {
    const user: UserRequest = {
      email: this.email,
      nickname: this.nickname,
      firstName: this.firstName,
      lastName: this.lastName,
      password: this.password
    };

    this.api.register(user)
      .subscribe(resp => {
        console.log(resp);
      });
  //   todo: fix CORS policy on the BE.
  }
}

