import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthCoreModule } from './auth-core.module';
import { LoginForm } from './forms/login.form';
import { RefreshInterceptor } from './interceptors';
import { LoginPage } from './pages/login.page';
import { AuthStoreModule } from './store';

export interface AuthModuleOptions {
	refresh?: boolean;
}

const commonComponents = [LoginForm, LoginPage];

const commonModules = [JwtModule, AuthStoreModule];

/**
 * TODO: Reimplement JwtModule as it's a mess and barely maintained
 * TODO: Expand it with automatic refreshing capability, and the already implemented NGRX connector
 * TODO: Provide it in 3 separate packages
 */
@NgModule({
	declarations: [...commonComponents],
	imports: [CommonModule, FormsModule, ReactiveFormsModule, ...commonModules],
	exports: [...commonComponents, ...commonModules],
})
export class AuthModule {
	public constructor(private readonly parentModule: AuthCoreModule) {
		if (!this.parentModule) {
			throw new Error('Core AuthModule not imported! Import AuthModule.forRoot()!');
		}
	}

	public static forRoot(_options: AuthModuleOptions): ModuleWithProviders<AuthCoreModule> {
		return {
			ngModule: AuthCoreModule,
			providers: [
				{
					provide: HTTP_INTERCEPTORS,
					useClass: RefreshInterceptor,
					multi: true,
				},
			],
		};
	}
}
