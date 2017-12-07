import { Injectable } from '@angular/core';

import {
	CellAlignments,
	Sizes
} from '../base/base.component';

/**
 * Default configuration options for the Row component.
 */
@Injectable()
export class CellConfig {
	/**
	 * Flexbox vertical alignment.
	 * @type {Alignments}
	 */
	align: CellAlignments = CellAlignments.Top;

	/**
	 * Arbitrary classes to add to this cell.
	 * @type {string}
	 */
	class: string = '';

	/**
	 * Creates a cell using either the specified number of columns, or build from an object whose properties are
	 * breakpoint names and values are the number of columns.
	 * @type {number | object}
	 */
	columns: number | object = 0;

	/**
	 * Pushes this cell into the grid by the specified columns, or build from an object whose properties are breakpoint
	 * names and values are the number of columns.
	 * @type {number | object}
	 */
	offset: number | object = 0;

	/**
	 * Allows a cell to automatically shrink or expand, or an object whose properties are breakpoint names and the
	 * values are the size.
	 * @type {Sizes | object}
	 */
	size: Sizes | object = Sizes.Default;

	/**
	 * A flag determining whether the row is visible at all.
	 * @type {boolean}
	 */
	visible = true;
}
