import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TileComponent } from './components/tile.component';

const commonModules = [CommonModule, FormsModule, ReactiveFormsModule];

const commonComponents = [TileComponent];

@NgModule({
	declarations: [...commonComponents],
	imports: [...commonModules],
	exports: [...commonModules, ...commonComponents],
})
export class SharedModule {}
