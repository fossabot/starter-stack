import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequest } from '@app/store/actions';
import { environment } from '@env';
import { of } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class AuthApiService {
	public constructor(private http: HttpClient) {}

	public login(request: LoginRequest) {
		return this.http.get(`${environment.api}`);
		console.log(request);
		return of({ token: 'mock' });
	}

	public logout() {
		return of({});
	}

	public refresh() {
		return of({});
	}
}
