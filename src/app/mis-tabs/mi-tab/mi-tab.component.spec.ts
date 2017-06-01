import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiTabComponent } from './mi-tab.component';

describe('MiTabComponent', () => {
  let component: MiTabComponent;
  let fixture: ComponentFixture<MiTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
