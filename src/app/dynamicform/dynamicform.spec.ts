import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dynamicform } from './dynamicform';

describe('Dynamicform', () => {
  let component: Dynamicform;
  let fixture: ComponentFixture<Dynamicform>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dynamicform]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dynamicform);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
