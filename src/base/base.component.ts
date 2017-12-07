/**
 * Flexbox alignments; `Left`, `Right`, `Center`, `Justify`, and `Spaced` are x-axis.
 */
export const enum Alignments {
	Left,
	Right,
	Center,
	Justify,
	Spaced,
	Top,
	Middle,
	Bottom,
	Stretch
}

/**
 * The standard color names; often used to dictate the "theme" or "type" of the component display.
 */
export const enum Colors {
	Primary,
	Secondary,
	Success,
	Warning,
	Alert
}

/**
 * The available grid directions.
 */
export const enum GridAxis {
	Horizontal,
	Vertical
}

/**
 * The available types of grid containers.
 */
export const enum GridContainer {
	None,
	Default,
	Fluid,
	Full
}

/**
 * The available types of grid gutters. Note that `Margin` and `Padding` can be combined as `GridGutters.Margin|GridGutters.Padding`.
 */
export const enum GridGutters {
	None,
	Both,
	Margin,
	Padding
}
