import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

export interface LoginFormData {
	username: string;
	password: string;
}

@Component({
	selector: 'app-login-form',
	templateUrl: './login.form.html',
	styleUrls: ['./login.form.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginForm implements OnInit {
	public formGroup = this.fb.group({
		username: this.fb.control('', [Validators.required]),
		password: this.fb.control('', [Validators.required]),
	});

	@Output()
	public output = new EventEmitter<LoginFormData>();

	public constructor(private readonly fb: FormBuilder) {}

	public ngOnInit(): void {}
}
