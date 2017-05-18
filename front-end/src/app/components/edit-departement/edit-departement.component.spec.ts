import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDepartementComponent } from './edit-departement.component';

describe('EditDepartementComponent', () => {
	let component: EditDepartementComponent;
	let fixture: ComponentFixture<EditDepartementComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [EditDepartementComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(EditDepartementComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should be created', () => {
		expect(component).toBeTruthy();
	});
});
