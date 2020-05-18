import { HttpClientModule } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthModule } from '@app/modules/auth/auth.module';

@NgModule({
	declarations: [],
	imports: [BrowserModule, HttpClientModule, AuthModule.forRoot({})],
})
export class CoreModule {
	public constructor(@Optional() @SkipSelf() core: CoreModule) {
		if (core) {
			throw new Error('Duplicate CoreModule!');
		}
	}
}
