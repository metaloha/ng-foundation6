import { Injectable, Input } from '@angular/core';

import {
	Alignments,
	GridAxis,
	GridGutters,
	GridContainer
} from '../base/base.component';

/**
 * Default configuration options for the Row component.
 */
@Injectable()
export class GridConfig {
	/**
	 * Determines whether this is a horizontal (default) or vertical grid.
	 * @type {GridAxis}
	 */
	axis: GridAxis = GridAxis.Horizontal;

	/**
	 * An object whose properties are breakpoint names and values are the type of `GridGutter` to remove.
	 * @type {object}
	 */
	@Input() collapse: object;

	/**
	 * A flag determining whether the grid is wrapped by a grid container.
	 * @type {GridContainer}
	 */
	container: GridContainer = GridContainer.Default;

	/**
	 * Creates a block grid using either the specified number of cells, or build from an object whose properties are
	 * breakpoint names and values are the number of cells.
	 * @type {number | object}
	 */
	grid: number | object = 0;

	/**
	 * Whether to add gutters to this grid, and what type.
	 * @type {GridGutters}
	 */
	gutters: GridGutters = GridGutters.Both;

	/**
	 * Flexbox horizontal alignment.
	 * @type {Alignments.Left}
	 */
	horizontalAlign: Alignments = Alignments.Left;

	/**
	 * Flexbox vertical alignment.
	 * @type {Alignments}
	 */
	verticalAlign: Alignments = Alignments.Top;

	/**
	 * A flag determining whether the row is visible at all.
	 * @type {boolean}
	 */
	visible = true;
}
