import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputExample } from './input-example';

describe('InputExample', () => {
  let component: InputExample;
  let fixture: ComponentFixture<InputExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
