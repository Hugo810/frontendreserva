import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarQuartoComponent } from './consultar-quarto.component';

describe('ConsultarQuartoComponent', () => {
  let component: ConsultarQuartoComponent;
  let fixture: ComponentFixture<ConsultarQuartoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConsultarQuartoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultarQuartoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
