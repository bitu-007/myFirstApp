import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pipeexample } from './pipeexample';

describe('Pipeexample', () => {
  let component: Pipeexample;
  let fixture: ComponentFixture<Pipeexample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pipeexample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pipeexample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
