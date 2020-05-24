import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";

@Injectable({
    providedIn: "root"
})
export class LoginService {
    constructor(private _httpService: HttpClient) { }

    public login(user): Observable<any> {
        return this._httpService.post<any>(`${environment.urlApi}/login`, user);
    }

    public signup(user): Observable<any> {
        return this._httpService.post<any>(`${environment.urlApi}/signup`, user);
    }

}