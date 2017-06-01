import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiColorPickerComponent } from './mi-color-picker.component';

describe('MiColorPickerComponent', () => {
  let component: MiColorPickerComponent;
  let fixture: ComponentFixture<MiColorPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiColorPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiColorPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
