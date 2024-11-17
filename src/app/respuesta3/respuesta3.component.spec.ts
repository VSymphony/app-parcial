import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Respuesta3Component } from './respuesta3.component';

describe('Respuesta3Component', () => {
  let component: Respuesta3Component;
  let fixture: ComponentFixture<Respuesta3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Respuesta3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Respuesta3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
