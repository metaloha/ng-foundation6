import { ProgressConfig } from './progress.config';

import { Colors } from '../base/base.component';

describe('progress-config', () => {
	it('should have sensible default values', () => {
		const config = new ProgressConfig();

		expect(config.decimals).toBe(0);
		expect(config.max).toBe(100);
		expect(config.min).toBe(0);
		expect(config.showValue).toBe(true);
		expect(config.tabIndex).toBe(0);
		expect(config.type).toBe(Colors.Primary);
		expect(config.value).toBe(0);
		expect(config.visible).toBe(true);
	});
});
