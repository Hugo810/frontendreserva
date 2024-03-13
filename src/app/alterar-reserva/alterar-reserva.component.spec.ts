import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterarReservaComponent } from './alterar-reserva.component';

describe('AlterarReservaComponent', () => {
  let component: AlterarReservaComponent;
  let fixture: ComponentFixture<AlterarReservaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlterarReservaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlterarReservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
