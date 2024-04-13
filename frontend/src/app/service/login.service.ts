import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, tap } from "rxjs";
import { ResponseLogin } from "../models/ResponseLogin";
import { AuthService } from "./auth.service";

@Injectable({
    providedIn: 'root',
})

export class LoginService {
    constructor(private httpClient: HttpClient, private authService: AuthService){}

    public doLogin(request: any): Observable<any>{
        return this.httpClient.post<ResponseLogin>(
            'http://localhost:8080/api/login',
            request
        ).pipe(tap(loginResponse => (this.authService.loginResponse = loginResponse)))
    }
}