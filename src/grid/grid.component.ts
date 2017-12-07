import {
	ChangeDetectionStrategy,
	Component,
	Input
} from '@angular/core';

import {
	GridAxis,
	GridGutters,
	GridContainer, Alignments
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
	 * The object describing the horizontal and vertical alignment of the grid children.
	 */
	@Input() align: object;

	/**
	 * Determines whether this is a horizontal (default) or vertical grid.
	 */
	@Input() axis: GridAxis;

	/**
	 * An object whose properties are breakpoint names and values are the type of `GridGutter` to remove.
	 */
	@Input() collapse: object;

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
	 * Flexbox horizontal alignment.
	 * @type {Alignments.Left}
	 */
	horizontalAlign: Alignments;

	/**
	 * Flexbox vertical alignment.
	 * @type {Alignments}
	 */
	verticalAlign: Alignments;

	/**
	 * Setup component defaults.
	 * @param {GridConfig} config The configuration object.
	 */
	constructor(config: GridConfig) {
		this.axis = config.axis;
		this.collapse = config.collapse;
		this.container = config.container;
		this.grid = config.grid;
		this.gutters = config.gutters;
		this.visible = config.visible;
	}

	public hasContainer() {
		return this.container !== GridContainer.None;
	}

	public containerClass() {
		const containerClasses: Array<string> = [];

		if (this.container !== GridContainer.None) {
			containerClasses.push('grid-container');
			console.log('container', this.container);
			switch (this.container) {
				case GridContainer.Fluid:
					containerClasses.push('fluid');
					break;
				case GridContainer.Full:
					containerClasses.push('full');
					break;
			}
		}

		return containerClasses.join(' ');
	}

	public axisClass() {
		switch (this.axis) {
			case GridAxis.Vertical:
				return 'y';
			case GridAxis.Horizontal:
			default:
				return 'x';
		}
	}

	public gutterClasses() {
		const gutterClasses: Array<string> = [];

		if (this.gutters !== GridGutters.None) {
			if (this.gutters === GridGutters.Margin || this.gutters === GridGutters.Both) {
				gutterClasses.push('grid-margin-' + this.axisClass());
			}
			if (this.gutters === GridGutters.Padding || this.gutters === GridGutters.Both) {
				gutterClasses.push('grid-padding-' + this.axisClass());
			}
		}

		return gutterClasses.join(' ');
	}

	public blockClasses() {
		const blockClasses: Array<string> = [];

		if ((typeof this.grid === 'string' && parseInt(this.grid, 10) > 0) || typeof this.grid === 'object' && Object.keys(this.grid).length > 0) {
			if (typeof this.grid === 'string') {
				blockClasses.push(`small-up-${this.grid}`); // Assumes the smallest breakpoint is named "small"
			} else {
				Object.keys(this.grid).forEach(key => {
					blockClasses.push(`${key}-up-${this.grid[key]}`);
				});
			}
		}

		return blockClasses.join(' ');
	}

	public collapseClasses() {
		const collapseClasses: Array<string> = [];

		if (typeof this.collapse === 'object') {
			Object.keys(this.collapse).forEach(key => {
				if (this.collapse[key] === GridGutters.Padding || this.collapse[key] === GridGutters.Both) {
					collapseClasses.push(`${key}-padding-collapse`);
				}
				if (this.collapse[key] === GridGutters.Margin || this.collapse[key] === GridGutters.Both) {
					collapseClasses.push(`${key}-margin-collapse`);
				}
			});
		}

		return collapseClasses.join(' ');
	}

	public alignmentClasses() {
		const alignmentClasses: Array<string> = [];

		if (typeof this.align === 'object') {
			Object.keys(this.align).forEach(key => {
				if (key === 'horizontal' || key === 'vertical') {
					switch (this.align[key]) {
						case Alignments.Left:
							alignmentClasses.push('align-left');
							break;
						case Alignments.Right:
							alignmentClasses.push('align-right');
							break;
						case Alignments.Center:
							alignmentClasses.push('align-center');
							break;
						case Alignments.Justify:
							alignmentClasses.push('align-justify');
							break;
						case Alignments.Spaced:
							alignmentClasses.push('align-spaced');
							break;
						case Alignments.Top:
							alignmentClasses.push('align-top');
							break;
						case Alignments.Middle:
							alignmentClasses.push('align-middle');
							break;
						case Alignments.Bottom:
							alignmentClasses.push('align-bottom');
							break;
						case Alignments.Stretch:
							alignmentClasses.push('align-stretch');
							break;
					}
				}
			});
		}

		return alignmentClasses.join(' ');
	}
}
