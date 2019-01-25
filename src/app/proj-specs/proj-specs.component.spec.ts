import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjSpecsComponent } from './proj-specs.component';

describe('ProjSpecsComponent', () => {
  let component: ProjSpecsComponent;
  let fixture: ComponentFixture<ProjSpecsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjSpecsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjSpecsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
