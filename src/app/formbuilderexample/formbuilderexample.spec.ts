import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Formbuilderexample } from './formbuilderexample';

describe('Formbuilderexample', () => {
  let component: Formbuilderexample;
  let fixture: ComponentFixture<Formbuilderexample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Formbuilderexample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Formbuilderexample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
