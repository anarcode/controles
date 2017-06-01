import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiCabeceraComponent } from './mi-cabecera.component';

describe('MiCabeceraComponent', () => {
  let component: MiCabeceraComponent;
  let fixture: ComponentFixture<MiCabeceraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiCabeceraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiCabeceraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
