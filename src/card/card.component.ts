import {
	ChangeDetectionStrategy,
	Component,
	Input
} from '@angular/core';

import { CardConfig } from './card.config';

/**
 * Cards are a popular and flexible UI component.
 */
@Component({
	selector: 'fd-card',
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.scss']
})
export class CardComponent {
	/**
	 * An optional image to display.
	 */
	@Input() image: string;

	/**
	 * A flag determining whether the progress bar is visibile at all.
	 */
	@Input() visible: boolean;

	/**
	 * Setup component defaults.
	 * @param {CardConfig} config The configuration object.
	 */
	constructor(config: CardConfig) {
		this.image = config.image;
		this.visible = config.visible;
	}
}
