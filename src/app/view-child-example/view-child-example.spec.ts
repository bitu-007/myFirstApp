import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChildExample } from './view-child-example';

describe('ViewChildExample', () => {
  let component: ViewChildExample;
  let fixture: ComponentFixture<ViewChildExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewChildExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewChildExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
