import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapaAcordeonComponent } from './capa-acordeon.component';

describe('CapaAcordeonComponent', () => {
  let component: CapaAcordeonComponent;
  let fixture: ComponentFixture<CapaAcordeonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapaAcordeonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapaAcordeonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
