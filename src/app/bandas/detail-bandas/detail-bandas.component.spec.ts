import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailBandasComponent } from './detail-bandas.component';

describe('DetailBandasComponent', () => {
  let component: DetailBandasComponent;
  let fixture: ComponentFixture<DetailBandasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailBandasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailBandasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
