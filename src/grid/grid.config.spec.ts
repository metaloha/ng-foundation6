import { GridConfig } from './grid.config';

describe('grid-config', () => {
	it('should have sensible default values', () => {
		const config = new GridConfig();

		expect(config.visible).toBe(true);
	});
});
