import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Respuesta2Component } from './respuesta2.component';

describe('Respuesta2Component', () => {
  let component: Respuesta2Component;
  let fixture: ComponentFixture<Respuesta2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Respuesta2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Respuesta2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
