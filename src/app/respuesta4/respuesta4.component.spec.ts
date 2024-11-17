import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Respuesta4Component } from './respuesta4.component';

describe('Respuesta4Component', () => {
  let component: Respuesta4Component;
  let fixture: ComponentFixture<Respuesta4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Respuesta4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Respuesta4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
