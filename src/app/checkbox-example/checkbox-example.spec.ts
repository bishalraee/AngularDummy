import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxExample } from './checkbox-example';

describe('CheckboxExample', () => {
  let component: CheckboxExample;
  let fixture: ComponentFixture<CheckboxExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckboxExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckboxExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
