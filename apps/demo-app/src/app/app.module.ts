import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard.component';
import { CoreModule } from './core/core.module';
import { AuthModule } from './modules/auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { AppStoreModule } from './store/app-store.module';

@NgModule({
	declarations: [AppComponent, DashboardComponent],
	imports: [CoreModule, SharedModule, AppRoutingModule, AppStoreModule, AuthModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
