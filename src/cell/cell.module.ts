import {
	ModuleWithProviders,
	NgModule
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { CellConfig } from './cell.config';
import { CellComponent } from './cell.component';

export { CellComponent } from './cell.component';

/**
 * The XY Grid component with optional container.
 */
@NgModule({
	declarations: [
		CellComponent
	],
	exports: [
		CellComponent
	],
	imports: [
		CommonModule
	],
	providers: [
		CellConfig
	]
})
export class CellModule {
	static forRoot(): ModuleWithProviders {
		return {
			ngModule: CellModule,
			providers: []
		};
	}
}
