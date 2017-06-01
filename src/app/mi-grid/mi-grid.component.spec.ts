import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiGridComponent } from './mi-grid.component';

describe('MiGridComponent', () => {
  let component: MiGridComponent;
  let fixture: ComponentFixture<MiGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
