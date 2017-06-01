import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MisTabsComponent } from './mis-tabs.component';

describe('MisTabsComponent', () => {
  let component: MisTabsComponent;
  let fixture: ComponentFixture<MisTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MisTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
