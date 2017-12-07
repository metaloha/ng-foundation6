import { CellConfig } from './cell.config';

describe('cell-config', () => {
	it('should have sensible default values', () => {
		const config = new CellConfig();

		expect(config.visible).toBe(true);
	});
});
