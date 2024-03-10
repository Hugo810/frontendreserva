import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InserirReservaComponent } from './InserirReservaComponent';

describe('InserirReservaComponent', () => {
  let component: InserirReservaComponent;
  let fixture: ComponentFixture<InserirReservaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InserirReservaComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(InserirReservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
