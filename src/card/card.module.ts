import {
	ModuleWithProviders,
	NgModule
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardComponent } from './card.component';

export { CardComponent } from './card.component';

/**
 * Cards are a popular and flexible UI component.
 */
@NgModule({
	declarations: [
		CardComponent
	],
	exports: [
		CardComponent
	],
	imports: [
		CommonModule
	]
})
export class CardModule {
	static forRoot(): ModuleWithProviders {
		return {
			ngModule: CardModule,
			providers: []
		};
	}
}
