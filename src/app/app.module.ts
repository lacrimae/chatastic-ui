import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
// import {MatSnackBarModule} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {RegistrationComponent} from './login/registration/registration.component';
import {FormsModule} from "@angular/forms";
import {LoginService} from "./service/LoginService";
import {HttpClientModule} from "@angular/common/http";
import {ErrorComponent} from './error/error.component';
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatCardModule} from "@angular/material/card";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    // MatSnackBarModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    BrowserAnimationsModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
