import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryResultDetailsComponent } from './query-result-details.component';

describe('QueryResultDetailsComponent', () => {
  let component: QueryResultDetailsComponent;
  let fixture: ComponentFixture<QueryResultDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueryResultDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryResultDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
