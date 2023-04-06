import {Component} from '@angular/core';
import {LoginService, UserRequest} from "../../service/LoginService";
import {FormControl, FormGroup, ValidationErrors, Validators} from "@angular/forms";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  registrationForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    nickname: new FormControl('', Validators.required),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor(private api: LoginService) {
  }

  /** Registers a new user. */
  register() {
    const user: UserRequest = {
      email: this.registrationForm.value.email,
      nickname: this.registrationForm.value.nickname,
      firstName: this.registrationForm.value.firstName,
      lastName: this.registrationForm.value.lastName,
      password: this.registrationForm.value.password
    };


    this.api.register(user).subscribe({
      next: (result) => {
        // todo: Navigate to confirmation email page.
        console.log(result)
      },
      error: (e) => {
        // todo: error handling:  create a popup with error
      },
      complete: () => console.info('complete')
    });
  }

  public hasSpecificError(formControlName: string, error: string): boolean {
    const control = this.get(formControlName);
    return control?.errors?.[error];
  }

  public hasError(formControlName: string): ValidationErrors | null {
    const control = this.get(formControlName);
    return control?.errors || null;
  }

  public isTouchedOrDirty(formControlName: string): boolean | undefined {
    const control: FormControl<String> = this.get(formControlName);
    return control?.touched || control?.dirty;
  }

  private get(formControlName: string): FormControl<String> {
    return this.registrationForm.get(formControlName) as FormControl<String>;
  }
}

