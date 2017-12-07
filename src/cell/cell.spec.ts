import {
	async,
	ComponentFixture,
	TestBed
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CellComponent } from './cell.component';
import { CellConfig } from './cell.config';

describe('CellComponent', () => {
	let comp: CellComponent;
	let fixture: ComponentFixture<CellComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [CellComponent],
			providers: [CellConfig]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(CellComponent);
		comp = fixture.componentInstance;
	});

	it('should be invisible', () => {
		comp.visible = false;
		fixture.detectChanges();
		const de_visible = fixture.debugElement.query(By.css('.cell'));
		expect(de_visible).toBeNull();
	});

	it('should be visible', () => {
		fixture.detectChanges();
		const el_visible = fixture.debugElement.query(By.css('.cell')).nativeElement;
		expect(el_visible).toBeDefined();
	});
});
