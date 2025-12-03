import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AlbumService } from '../album.service';
import { album } from '../models/models';
import { BandaService } from '../../bandas/bandas.service';
import { Banda } from '../../bandas/models/models';

@Component({
  selector: 'app-listar-album',
  templateUrl: './listar-album.component.html',
  styleUrls: ['./listar-album.component.css']
})
export class ListarAlbumComponent implements OnInit, OnDestroy {
  albums: album[] = [];
  filtered: album[] = [];
  bandId?: number;
  band?: Banda | null = null;
  loading = false;
  error: string | null = null;

  private subs = new Subscription();

  constructor(
    private albumService: AlbumService,
    private bandaService: BandaService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // listen for query param `bandId` (e.g. /albums?bandId=1)
    const sp = this.route.queryParams.subscribe(params => {
      const b = params['bandId'];
      this.bandId = b !== undefined ? +b : undefined;
      this.loadAlbums();
    });
    this.subs.add(sp);
  }

  private loadAlbums(): void {
    this.loading = true;
    this.error = null;
    const s = this.albumService.getAlbums().subscribe(
      all => {
        this.albums = all || [];
        if (this.bandId != null && !isNaN(this.bandId)) {
          this.filtered = this.albums.filter(a => a.bandId === this.bandId);
          // try to fetch the band to show its name and track that subscription
          const bs = this.bandaService.getBandaById(this.bandId).subscribe(
            b => this.band = b,
            _ => this.band = null
          );
          this.subs.add(bs);
        } else {
          this.filtered = [...this.albums];
          this.band = null;
        }
        this.loading = false;
      },
      err => {
        this.error = 'Failed to load albums';
        this.filtered = [];
        this.band = null;
        this.loading = false;
      }
    );
    this.subs.add(s);
  }

  viewAlbum(a: album) {
    this.router.navigate(['/albums', a.id]);
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

}
