import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env';
import { LoginRequest, LoginResponse } from '@workspace/demo-server-api';
import { Observable, of } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class AuthApiService {
	public constructor(private readonly http: HttpClient) {
		console.log('AuthApiService', this.http);
	}

	public login(request: LoginRequest): Observable<LoginResponse> {
		return this.http.post<LoginResponse>(`${environment.api}/auth/login`, request);
	}

	public logout() {
		return of({});
	}

	public refresh() {
		return of({});
	}
}
