import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterarQuartoComponent } from './alterar-quarto.component';

describe('AlterarQuartoComponent', () => {
  let component: AlterarQuartoComponent;
  let fixture: ComponentFixture<AlterarQuartoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlterarQuartoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlterarQuartoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
