import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Simpletemplateform } from './simpletemplateform';

describe('Simpletemplateform', () => {
  let component: Simpletemplateform;
  let fixture: ComponentFixture<Simpletemplateform>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Simpletemplateform]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Simpletemplateform);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
