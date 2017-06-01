import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiAcordeonComponent } from './mi-acordeon.component';

describe('MiAcordeonComponent', () => {
  let component: MiAcordeonComponent;
  let fixture: ComponentFixture<MiAcordeonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiAcordeonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiAcordeonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
