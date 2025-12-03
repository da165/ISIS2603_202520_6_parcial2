import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCancionesComponent } from './detail-canciones.component';

describe('DetailCancionesComponent', () => {
  let component: DetailCancionesComponent;
  let fixture: ComponentFixture<DetailCancionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailCancionesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailCancionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
