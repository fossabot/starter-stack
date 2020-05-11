import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequest } from '@app/store/actions';
import { environment } from '@env';
import { of } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class AuthApiService {
	public constructor(private http: HttpClient) {}

	public login(request: LoginRequest) {
		console.log('aad', request);
		return this.http.post<object>(`${environment.api}/auth/login`, request);
	}

	public logout() {
		return of({});
	}

	public refresh() {
		return of({});
	}
}
