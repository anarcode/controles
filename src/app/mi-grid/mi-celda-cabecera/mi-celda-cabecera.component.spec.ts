import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiCeldaCabeceraComponent } from './mi-celda-cabecera.component';

describe('MiCeldaCabeceraComponent', () => {
  let component: MiCeldaCabeceraComponent;
  let fixture: ComponentFixture<MiCeldaCabeceraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiCeldaCabeceraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiCeldaCabeceraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
