import {
	ChangeDetectionStrategy,
	Component,
	Input
} from '@angular/core';

import { Colors } from '../base/base.component';
import { ProgressConfig } from './progress.config';

/**
 * Show your progress. A simple way to add progress bars to your layouts.
 */
@Component({
	selector: 'fd-progress',
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: './progress.component.html',
	styleUrls: ['./progress.component.scss']
})
export class ProgressComponent {
	/**
	 * Number of decimal places to show in the ARIA and visible text.
	 */
	@Input() decimals: number;

	/**
	 * The maximum value that can be assigned.
	 */
	@Input() max: number;

	/**
	 * The minimum value that can be assigned.
	 */
	@Input() min: number;

	/**
	 * A flag determining whether the current value will be visible as text.
	 */
	@Input() showValue: boolean;

	/**
	 * The tab index of this component.
	 */
	@Input() tabIndex: number;

	/**
	 * What type of progress bar this is.
	 */
	@Input() type: Colors;

	/**
	 * The current numerical value to be shown.
	 */
	@Input() value: number;

	/**
	 * A flag determining whether the progress bar is visible at all.
	 */
	@Input() visible: boolean;

	/**
	 * Setup component defaults.
	 * @param {ProgressConfig} config The configuration object.
	 */
	constructor(config: ProgressConfig) {
		this.decimals = config.decimals;
		this.max = config.max;
		this.min = config.min;
		this.showValue = config.showValue;
		this.tabIndex = config.tabIndex;
		this.type = config.type;
		this.value = config.value;
		this.visible = config.visible;
	}

	/**
	 * Figures out the percentage using the current min, max, and value, and trims to 2 decimal places.
	 * @returns {string} The percentage with sign.
	 */
	public getPercent() {
		return (Math.round((((this.value - this.min) * 100) / (this.max - this.min)) * 100) / 100) + '%';
	}
}
