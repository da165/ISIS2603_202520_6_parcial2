import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarAlbumComponent } from './listar-album.component';

describe('ListarAlbumComponent', () => {
  let component: ListarAlbumComponent;
  let fixture: ComponentFixture<ListarAlbumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListarAlbumComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
