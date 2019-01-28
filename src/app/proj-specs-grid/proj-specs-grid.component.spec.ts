import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjSpecsGridComponent } from './proj-specs-grid.component';

describe('ProjSpecsGridComponent', () => {
  let component: ProjSpecsGridComponent;
  let fixture: ComponentFixture<ProjSpecsGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjSpecsGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjSpecsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
