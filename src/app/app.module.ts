import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ListarBandasComponent } from './bandas/listar-bandas/listar-bandas.component';
import { DetailBandasComponent } from './bandas/detail-bandas/detail-bandas.component';
import { ListarAlbumComponent } from './album/listar-album/listar-album.component';
import { DetailAlbumComponent } from './album/detail-album/detail-album.component';
import { ListarCancionesComponent } from './canciones/listar-canciones/listar-canciones.component';
import { DetailCancionesComponent } from './canciones/detail-canciones/detail-canciones.component';
import { HeaderComponent } from './shared/header/header.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, SpinnerComponent, HomeComponent, ListarBandasComponent, DetailBandasComponent, ListarAlbumComponent, DetailAlbumComponent, ListarCancionesComponent, DetailCancionesComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
