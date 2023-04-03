import {catchError, Observable, throwError} from "rxjs";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Injectable} from "@angular/core";

export interface UserRequest {
  email: string;
  nickname: string;
  firstName: string;
  lastName: string;
  password: string;
}

export interface UserResponse {
  uuid: string;
  email: string;
  nickname: string;
  firstName: string;
  lastName: string;
}

const endpoint = 'http://localhost:8080/api/v1/';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {
  }

  register(user: UserRequest): Observable<any> {
    return this.http.post<UserRequest>(endpoint + 'registration', user).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(() => 'Something bad happened; please try again later.');
  }
}
