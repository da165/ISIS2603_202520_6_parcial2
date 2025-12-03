import { Component, OnInit, OnDestroy } from '@angular/core';
import { BandaService } from '../bandas.service';
import { Banda } from '../models/models';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-bandas',
  templateUrl: './listar-bandas.component.html',
  styleUrls: ['./listar-bandas.component.css']
})
export class ListarBandasComponent implements OnInit, OnDestroy {
  bandas: Banda[] = [];
  loading = false;
  error: string | null = null;
  private subs = new Subscription();

  constructor(private bandaService: BandaService, private router: Router) {}

  ngOnInit(): void {
    this.loadBandas();
  }

  loadBandas() {
    this.loading = true;
    const s = this.bandaService.getBandas().subscribe(
      data => {
        this.bandas = data || [];
        this.loading = false;
      },
      err => {
        this.error = 'Failed to load bands';
        this.loading = false;
      }
    );
    this.subs.add(s);
  }

  viewDetail(b: Banda) {
    this.router.navigate(['/bandas', b.id]);
  }

  viewAlbums(b: Banda) {
    this.router.navigate(['/albums'], { queryParams: { bandId: b.id } });
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

}
