import {
	ModuleWithProviders,
	NgModule
} from '@angular/core';

import { CardModule } from './card/card.module';
import { GridModule } from './grid/grid.module';
import { ProgressModule } from './progress/progress.module';

export { CardModule } from './card/card.module';
export { GridModule } from './grid/grid.module';
export { ProgressModule } from './progress/progress.module';

/**
 * List of NG-Foundation modules loaded by default.
 */
const FD_MODULES = [
	CardModule,
	GridModule,
	ProgressModule
];

/**
 * The root module for NG-Foundation that is actually injected into other modules.
 */
@NgModule({
	imports: [
		CardModule.forRoot(),
		GridModule.forRoot(),
		ProgressModule.forRoot()
	],
	exports: FD_MODULES
})
export class FdRootModule {
}

/**
 * The NG-Foundation module that contains all the Foundation component modules.
 */
@NgModule({
	imports: FD_MODULES,
	exports: FD_MODULES
})
export class FdModule {
	static forRoot(): ModuleWithProviders {
		return {
			ngModule: FdRootModule
		};
	}
}
