import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCrudOperationComponent } from './app-crud-operation.component';

describe('AppCrudOperationComponent', () => {
  let component: AppCrudOperationComponent;
  let fixture: ComponentFixture<AppCrudOperationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppCrudOperationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppCrudOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
