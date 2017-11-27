import {
	async,
	ComponentFixture,
	TestBed
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CardComponent } from './card.component';
import { CardConfig } from './card.config';

describe('CardComponent', () => {
	let comp: CardComponent;
	let fixture: ComponentFixture<CardComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [CardComponent],
			providers: [CardConfig]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(CardComponent);
		comp = fixture.componentInstance;
	});

	it('should be invisible', () => {
		comp.visible = false;
		fixture.detectChanges();
		const de_visible = fixture.debugElement.query(By.css('.card'));
		expect(de_visible).toBeNull();
	});

	it('should be visible', () => {
		fixture.detectChanges();
		const el_visible = fixture.debugElement.query(By.css('.card')).nativeElement;
		expect(el_visible).toBeDefined();
	});

	it('should not have an image', () => {
		fixture.detectChanges();
		const de_image = fixture.debugElement.query(By.css('.card-image'));
		expect(de_image).toBeNull();
	});

	it('should have an image', () => {
		comp.image = 'http://lorempixel.com/400/200';
		fixture.detectChanges();
		const el_image = fixture.debugElement.query(By.css('.card-image img')).nativeElement;
		expect(el_image.src).toContain('http://lorempixel.com/400/200');
	});
});
