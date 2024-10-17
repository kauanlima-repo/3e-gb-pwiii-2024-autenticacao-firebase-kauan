import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCadUserComponent } from './form-cad-user.component';

describe('FormCadUserComponent', () => {
  let component: FormCadUserComponent;
  let fixture: ComponentFixture<FormCadUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormCadUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormCadUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
