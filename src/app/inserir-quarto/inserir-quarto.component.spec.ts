import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InserirQuartoComponent } from './inserir-quarto.component';

describe('InserirQuartoComponent', () => {
  let component: InserirQuartoComponent;
  let fixture: ComponentFixture<InserirQuartoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InserirQuartoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InserirQuartoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
