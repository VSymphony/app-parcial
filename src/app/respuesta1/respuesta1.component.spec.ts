import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Respuesta1Component } from './respuesta1.component';

describe('Respuesta1Component', () => {
  let component: Respuesta1Component;
  let fixture: ComponentFixture<Respuesta1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Respuesta1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Respuesta1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
