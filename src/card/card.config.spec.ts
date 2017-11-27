import { CardConfig } from './card.config';

describe('card-config', () => {
	it('should have sensible default values', () => {
		const config = new CardConfig();

		expect(config.image).toBeUndefined();
		expect(config.visible).toBe(true);
	});
});
