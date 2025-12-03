import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ListarAlbumComponent } from "./listar-album/listar-album.component";
import { DetailAlbumComponent } from "./detail-album/detail-album.component";
@NgModule({
  declarations: [ListarAlbumComponent, DetailAlbumComponent],
  imports: [CommonModule],
    exports: [ListarAlbumComponent, DetailAlbumComponent],
})
export class AlbumModule {}