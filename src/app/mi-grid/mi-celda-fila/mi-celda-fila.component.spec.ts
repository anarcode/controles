import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiCeldaFilaComponent } from './mi-celda-fila.component';

describe('MiCeldaFilaComponent', () => {
  let component: MiCeldaFilaComponent;
  let fixture: ComponentFixture<MiCeldaFilaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiCeldaFilaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiCeldaFilaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
