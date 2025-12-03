import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarBandasComponent } from './listar-bandas.component';

describe('ListarBandasComponent', () => {
  let component: ListarBandasComponent;
  let fixture: ComponentFixture<ListarBandasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListarBandasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarBandasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
