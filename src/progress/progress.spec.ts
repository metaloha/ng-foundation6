import {
	async,
	ComponentFixture,
	TestBed
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ProgressComponent } from './progress.component';
import { ProgressConfig } from './progress.config';

describe('ProgressComponent', () => {
	let comp: ProgressComponent;
	let fixture: ComponentFixture<ProgressComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ProgressComponent],
			providers: [ProgressConfig]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ProgressComponent);
		comp = fixture.componentInstance;
	});

	it('should be invisible', () => {
		comp.visible = false;
		fixture.detectChanges();
		const de_visible = fixture.debugElement.query(By.css('.progress'));
		expect(de_visible).toBeNull();
	});

	it('should be visible', () => {
		fixture.detectChanges();
		const el_visible = fixture.debugElement.query(By.css('.progress')).nativeElement;
		expect(el_visible).toBeDefined();
	});

	it('should use defaults', () => {
		fixture.detectChanges();
		const el_meter_text = fixture.debugElement.query(By.css('.progress-meter-text')).nativeElement;
		const el_aria = fixture.debugElement.query(By.css('.progress')).nativeElement;
		expect(el_meter_text.textContent).toBe('0%');
		expect(el_aria.getAttribute('tabIndex')).toBe('0');
		expect(el_aria.getAttribute('aria-valuenow')).toBe('0');
		expect(el_aria.getAttribute('aria-valuetext')).toBe('0%');
		expect(el_aria.getAttribute('aria-valuemin')).toBe('0');
		expect(el_aria.getAttribute('aria-valuemax')).toBe('100');
	});

	it('should display correct text, 0-100 = 50', () => {
		comp.value = 50;
		fixture.detectChanges();
		const el_meter_text = fixture.debugElement.query(By.css('.progress-meter-text')).nativeElement;
		const el_aria = fixture.debugElement.query(By.css('.progress')).nativeElement;
		expect(el_meter_text.textContent).toBe('50%');
		expect(el_aria.getAttribute('aria-valuetext')).toBe('50%');
	});

	it('should display correct text, 0-75 = 50', () => {
		comp.value = 50;
		comp.max = 75;
		fixture.detectChanges();
		const el_meter_text = fixture.debugElement.query(By.css('.progress-meter-text')).nativeElement;
		const el_aria = fixture.debugElement.query(By.css('.progress')).nativeElement;
		expect(el_meter_text.textContent).toBe('66.67%');
		expect(el_aria.getAttribute('aria-valuetext')).toBe('66.67%');
		expect(el_aria.getAttribute('aria-valuemax')).toBe('75');
	});

	it('should display correct text, 25-75 = 50', () => {
		comp.value = 50;
		comp.max = 75;
		comp.min = 25;
		fixture.detectChanges();
		const el_meter_text = fixture.debugElement.query(By.css('.progress-meter-text')).nativeElement;
		const el_aria = fixture.debugElement.query(By.css('.progress')).nativeElement;
		expect(el_meter_text.textContent).toBe('50%');
		expect(el_aria.getAttribute('aria-valuetext')).toBe('50%');
		expect(el_aria.getAttribute('aria-valuemax')).toBe('75');
		expect(el_aria.getAttribute('aria-valuemin')).toBe('25');
	});

	it('should not display text, 0-100 = 50', () => {
		comp.value = 50;
		comp.showValue = false;
		fixture.detectChanges();
		const de_meter_text = fixture.debugElement.query(By.css('.progress-meter-text'));
		const el_aria = fixture.debugElement.query(By.css('.progress')).nativeElement;
		expect(de_meter_text).toBeNull();
		expect(el_aria.getAttribute('aria-valuetext')).toBe('50%');
	});
});
