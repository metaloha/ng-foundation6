import {
	ModuleWithProviders,
	NgModule
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgressConfig } from './progress.config';
import { ProgressComponent } from './progress.component';

export { ProgressComponent } from './progress.component';

/**
 * Show your progress. A simple way to add progress bars to your layouts.
 */
@NgModule({
	declarations: [
		ProgressComponent
	],
	exports: [
		ProgressComponent
	],
	imports: [
		CommonModule
	],
	providers: [
		ProgressConfig
	]
})
export class ProgressModule {
	static forRoot(): ModuleWithProviders {
		return {
			ngModule: ProgressModule,
			providers: []
		};
	}
}
