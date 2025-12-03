import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BandaService } from '../bandas.service';
import { Banda } from '../models/models';

@Component({
  selector: 'app-detail-bandas',
  templateUrl: './detail-bandas.component.html',
  styleUrls: ['./detail-bandas.component.css']
})
export class DetailBandasComponent implements OnInit, OnDestroy {
  band?: Banda | null = null;
  private subs = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bandaService: BandaService
  ) {}

  ngOnInit(): void {
    const sp = this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.loadBand(+id);
      }
    });
    this.subs.add(sp);
  }

  private loadBand(id: number) {
    const s = this.bandaService.getBandaById(id).subscribe(b => this.band = b, _ => this.band = null);
    this.subs.add(s);
  }

  viewAlbums() {
    if (!this.band) return;
    this.router.navigate(['/albums'], { queryParams: { bandId: this.band.id } });
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

}
