import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiFilaComponent } from './mi-fila.component';

describe('MiFilaComponent', () => {
  let component: MiFilaComponent;
  let fixture: ComponentFixture<MiFilaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiFilaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiFilaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
