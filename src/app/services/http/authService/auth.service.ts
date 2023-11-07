import { Injectable } from '@angular/core';
import { environment as ENV } from './../../enviroment';
import { HttpClient } from '@angular/common/http';
import { Observable, firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(public http: HttpClient) {}

  async doLogin(credentials: any): Promise<any> {
    return await firstValueFrom(
      this.http.post<any>(`${ENV.BASE_URL}/login`, credentials)
    );
  }
  /*
  doRegister(credentials): Observable<any> {
    return this.http.post<any>(`${ENV.BASE_URL}/signup`, credentials, {
      observe: 'response',
    });
  }
*/
  doLogout(): Observable<any> {
    return this.http.get<any>(`${ENV.BASE_URL}/logout`, {
      observe: 'response',
    });
  }
}
