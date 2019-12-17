import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleDataViewComponent } from './single-data-view.component';

describe('SingleDataViewComponent', () => {
  let component: SingleDataViewComponent;
  let fixture: ComponentFixture<SingleDataViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleDataViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleDataViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
