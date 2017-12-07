import {
	ChangeDetectionStrategy,
	Component,
	Input
} from '@angular/core';

import {
	CellAlignments,
	Sizes
} from '../base/base.component';
import { CellConfig } from './cell.config';

/**
 * The Cell component.
 */
@Component({
	selector: 'fd-cell',
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: './cell.component.html',
	styleUrls: ['./cell.component.scss']
})
export class CellComponent {
	/**
	 * The object describing the horizontal and vertical alignment of the grid children.
	 */
	@Input() align: CellAlignments;

	/**
	 * Arbitrary classes to add to this cell.
	 */
	@Input() class: string;

	/**
	 * Creates a cell using either the specified number of columns, or build from an object whose properties are
	 * breakpoint names and values are the number of columns.
	 */
	@Input() columns: number | object = 0;

	/**
	 * Pushes this cell into the grid by the specified columns, or build from an object whose properties are breakpoint
	 * names and values are the number of columns.
	 */
	@Input() offset: number | object = 0;

	/**
	 * Allows a cell to automatically shrink or expand, or an object whose properties are breakpoint names and the
	 * values are the size.
	 */
	@Input() size: Sizes | object;

	/**
	 * A flag determining whether the progress bar is visible at all.
	 */
	@Input() visible: boolean;

	/**
	 * Setup component defaults.
	 * @param {CellConfig} config The configuration object.
	 */
	constructor(config: CellConfig) {
		this.align = config.align;
		this.class = config.class;
		this.columns = config.columns;
		this.offset = config.offset;
		this.size = config.size;
		this.visible = config.visible;
	}

	public columnClasses() {
		const columnClasses: Array<string> = [];

		if (typeof this.columns === 'string' && parseInt(this.columns, 10) > 0 || typeof this.columns === 'object' && Object.keys(this.columns).length > 0) {
			if (typeof this.columns === 'string') {
				columnClasses.push(`small-${this.columns}`);
			} else {
				Object.keys(this.columns).forEach(key => {
					columnClasses.push(`${key}-${this.columns[key]}`);
				});
			}
		}

		return columnClasses.join(' ');
	}

	public sizeClasses() {
		const sizeClasses: Array<string> = [];

		if (typeof this.size === 'number' || typeof this.size === 'object' && Object.keys(this.size).length > 0) {
			switch (this.size) {
				case Sizes.Grow:
					sizeClasses.push('auto');
					break;
				case Sizes.Shrink:
					sizeClasses.push('shrink');
					break;
			}
		} else {
			Object.keys(this.size).forEach(key => {
				switch (this.size) {
					case Sizes.Grow:
						sizeClasses.push(`${key}-auto`);
						break;
					case Sizes.Shrink:
						sizeClasses.push(`${key}-shrink`);
						break;
				}
			});
		}

		return sizeClasses.join(' ');
	}

	public offsetClasses() {
		const offsetClasses: Array<string> = [];

		if (typeof this.offset === 'string' && parseInt(this.offset, 10) > 0 || typeof this.offset === 'object' && Object.keys(this.offset).length > 0) {
			if (typeof this.offset === 'string') {
				offsetClasses.push(`small-offset-${this.offset}`);
			} else {
				Object.keys(this.offset).forEach(key => {
					offsetClasses.push(`${key}-offset-${this.offset[key]}`);
				});
			}
		}

		return offsetClasses.join(' ');
	}

	public alignmentClasses() {
		const alignmentClasses: Array<string> = [];

		switch (this.align) {
			case CellAlignments.Top:
				alignmentClasses.push('align-self-top');
				break;
			case CellAlignments.Middle:
				alignmentClasses.push('align-self-middle');
				break;
			case CellAlignments.Bottom:
				alignmentClasses.push('align-self-bottom');
				break;
			case CellAlignments.Stretch:
				alignmentClasses.push('align-self-stretch');
				break;
		}

		return alignmentClasses.join(' ');
	}
}
