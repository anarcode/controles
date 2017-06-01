import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiColumnaComponent } from './mi-columna.component';

describe('MiColumnaComponent', () => {
  let component: MiColumnaComponent;
  let fixture: ComponentFixture<MiColumnaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiColumnaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiColumnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
