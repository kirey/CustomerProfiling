import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAlgorithmComponent } from './view-algorithm.component';

describe('ViewAlgorithmComponent', () => {
  let component: ViewAlgorithmComponent;
  let fixture: ComponentFixture<ViewAlgorithmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAlgorithmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAlgorithmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
