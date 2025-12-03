import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarAlbumComponent } from './album/listar-album/listar-album.component';
import { DetailAlbumComponent } from './album/detail-album/detail-album.component';
import { ListarBandasComponent } from './bandas/listar-bandas/listar-bandas.component';
import { DetailBandasComponent } from './bandas/detail-bandas/detail-bandas.component';
import { ListarCancionesComponent } from './canciones/listar-canciones/listar-canciones.component';
import { DetailCancionesComponent } from './canciones/detail-canciones/detail-canciones.component'; 

const routes: Routes = [
  {path: 'albums', component: ListarAlbumComponent},
  {path: 'albums/:id', component: DetailAlbumComponent},
  {path: 'bandas', component: ListarBandasComponent},
  {path: 'bandas/:id', component: DetailBandasComponent},
  {path: 'canciones', component: ListarCancionesComponent},
  {path: 'canciones/:id', component: DetailCancionesComponent},
  {path: '', redirectTo: '/bandas', pathMatch: 'full'},
  {path: '**', redirectTo: '/bandas' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
