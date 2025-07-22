import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteExample } from './autocomplete-example';

describe('AutocompleteExample', () => {
  let component: AutocompleteExample;
  let fixture: ComponentFixture<AutocompleteExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutocompleteExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutocompleteExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
