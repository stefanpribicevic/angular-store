import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginRegisterService {
  private postLoginUrl = "http://localhost:8080/store/auth/authenticateuser";
  private postRegisterUrl = "http://localhost:8080/store/user";

  constructor(private http: HttpClient) { }

  postLogin(requestObject) {
    return this.http.post(this.postLoginUrl, requestObject);
  }

  postRegister(requestObject) {
    return this.http.post(this.postRegisterUrl, requestObject);
  }
}
