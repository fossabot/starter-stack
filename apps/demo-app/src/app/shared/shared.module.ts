import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TileComponent } from './components/tile.component';

const commonModules = [CommonModule];

const commonComponents = [TileComponent];

@NgModule({
	declarations: [...commonComponents],
	imports: [...commonModules],
	exports: [...commonModules, ...commonComponents]
})
export class SharedModule {}
