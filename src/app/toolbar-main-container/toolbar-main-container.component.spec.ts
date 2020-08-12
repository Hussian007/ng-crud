import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarMainContainerComponent } from './toolbar-main-container.component';

describe('ToolbarMainContainerComponent', () => {
  let component: ToolbarMainContainerComponent;
  let fixture: ComponentFixture<ToolbarMainContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolbarMainContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarMainContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
