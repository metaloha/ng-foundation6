import {Injectable} from '@angular/core';

/**
 * Default configuration options for the Card component.
 */
@Injectable()
export class CardConfig {
	/**
	 * An optional image to display.
	 */
	image: string;

	/**
	 * A flag determining whether the progress bar is visibile at all.
	 * @type {boolean}
	 */
	visible = true;
}
