import {Injectable} from '@angular/core';

import { Colors } from '../base/base.component';

/**
 * Default configuration options for the Progress component.
 */
@Injectable()
export class ProgressConfig {
	/**
	 * Number of decimal places to show in the ARIA and visible text.
	 * @type {number}
	 */
	decimals = 0;

	/**
	 * The maximum value that can be assigned.
	 * @type {number}
	 */
	max = 100;

	/**
	 * The minimum value that can be assigned.
	 * @type {number}
	 */
	min = 0;

	/**
	 * A flag determining whether the current value will be visible as text.
	 * @type {boolean}
	 */
	showValue = true;

	/**
	 * The tab index of this component.
	 * @type {number}
	 */
	tabIndex = 0;

	/**
	 * What type of progress bar this is.
	 * @type {Colors}
	 */
	type: Colors = Colors.Primary;

	/**
	 * The current numerical value to be shown.
	 * @type {number}
	 */
	value = 0;

	/**
	 * A flag determining whether the progress bar is visible at all.
	 * @type {boolean}
	 */
	visible = true;
}
