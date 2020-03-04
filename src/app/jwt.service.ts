import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor(private httpClient: HttpClient) {

  }

  public get loggedIn(): boolean {
    return localStorage.getItem('access_token') !== null;
  }

  login(email: string, password: string) {
    return this.httpClient.post<{ access_token: string }>('/api/authenticate', {
      email,
      password
    }).pipe(tap(res => {
      localStorage.setItem('access_token', res.access_token);
    }));
  }

  register(email: string, password: string) {
    return this.httpClient.post<{ access_token: string }>('http://www.your-server.com/auth/register', {
      email,
      password
    }).pipe(tap(res => {
      this.login(email, password);
    }));
  }

  logout() {
    localStorage.removeItem('access_token');
  }
}
