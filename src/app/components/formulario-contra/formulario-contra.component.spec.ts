import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioContraComponent } from './formulario-contra.component';

describe('FormularioContraComponent', () => {
  let component: FormularioContraComponent;
  let fixture: ComponentFixture<FormularioContraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioContraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioContraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
