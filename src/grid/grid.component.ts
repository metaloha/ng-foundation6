import {
	ChangeDetectionStrategy,
	Component,
	Input
} from '@angular/core';

import {
	GridAxis,
	GridGutters,
	GridContainer
} from '../base/base.component';
import { GridConfig } from './grid.config';

/**
 * The XY Grid component with optional container.
 */
@Component({
	selector: 'fd-grid',
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: './grid.component.html',
	styleUrls: ['./grid.component.scss']
})
export class GridComponent {
	/**
	 * Determines whether this is a horizontal (default) or vertical grid.
	 */
	@Input() axis:GridAxis;

	/**
	 * A flag determining whether the grid is wrapped by a grid container.
	 */
	@Input() container: GridContainer;

	/**
	 * Creates a block grid using either the specified number of cells, or build from an object whose properties are
	 * breakpoint names and values are the number of cells.
	 */
	@Input() grid: number | object;

	/**
	 * Whether to add gutters to this grid, and what type.
	 */
	@Input() gutters: GridGutters;

	/**
	 * A flag determining whether the progress bar is visible at all.
	 */
	@Input() visible: boolean;

	/**
	 * Setup component defaults.
	 * @param {ProgressConfig} config The configuration object.
	 */
	constructor(config: GridConfig) {
		this.axis = config.axis;
		this.container = config.container;
		this.grid = config.grid;
		this.gutters = config.gutters;
		this.visible = config.visible;
	}

	public containerClass() {
		let containerClass: Array<string> = [];

		if (this.container !== GridContainer.None) {
			containerClass.push('grid-container');
			if (this.container === GridContainer.Fluid) {
				containerClass.push('fluid');
			}
			if (this.container === GridContainer.Full) {
				containerClass.push('full');
			}
		}

		return containerClass.join(' ');
	}
}
