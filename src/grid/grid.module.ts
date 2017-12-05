import {
	ModuleWithProviders,
	NgModule
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { GridComponent } from './grid.component';

export { GridComponent } from './grid.component';

/**
 * The XY Grid component with optional container.
 */
@NgModule({
	declarations: [
		GridComponent
	],
	exports: [
		GridComponent
	],
	imports: [
		CommonModule
	]
})
export class GridModule {
	static forRoot(): ModuleWithProviders {
		return {
			ngModule: GridModule,
			providers: []
		};
	}
}
