import {
	async,
	ComponentFixture,
	TestBed
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { GridComponent } from './grid.component';
import { GridConfig } from './grid.config';

describe('GridComponent', () => {
	let comp: GridComponent;
	let fixture: ComponentFixture<GridComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [GridComponent],
			providers: [GridConfig]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(GridComponent);
		comp = fixture.componentInstance;
	});

	it('should be invisible', () => {
		comp.visible = false;
		fixture.detectChanges();
		const de_visible = fixture.debugElement.query(By.css('.grid'));
		expect(de_visible).toBeNull();
	});

	it('should be visible', () => {
		fixture.detectChanges();
		const el_visible = fixture.debugElement.query(By.css('.grid')).nativeElement;
		expect(el_visible).toBeDefined();
	});
});
