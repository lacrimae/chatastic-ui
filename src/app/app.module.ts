import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
// import {MatSnackBarModule} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {RegistrationComponent} from './registration/registration.component';
import {FormsModule} from "@angular/forms";
import {LoginService} from "./service/LoginService";
import {HttpClientModule} from "@angular/common/http";
import {ErrorComponent} from './error/error.component';
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatCardModule} from "@angular/material/card";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {LoginComponent} from './login/login.component';
import {HeaderComponent} from './header/header.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {FooterComponent} from './footer/footer.component';
import {HomepageComponent} from './homepage/homepage.component';
import {RouterModule, Routes} from "@angular/router";

const appRoutes: Routes = [
  {path: '', component: HomepageComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    ErrorComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent
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
    BrowserAnimationsModule,
    FontAwesomeModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
