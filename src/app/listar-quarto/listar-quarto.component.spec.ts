import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarQuartoComponent } from './listar-quarto.component';

describe('ListarQuartoComponent', () => {
  let component: ListarQuartoComponent;
  let fixture: ComponentFixture<ListarQuartoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListarQuartoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListarQuartoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
