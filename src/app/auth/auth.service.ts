import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(usuario: string, password: string) {
    //if (usuario == "erick" && password == "1234") {
      sessionStorage.setItem("login", "true");
    //}
  }

  logout() {
    sessionStorage.clear()
  }

  isLogin(): boolean{
    return !!sessionStorage.getItem("login")
  }
}
