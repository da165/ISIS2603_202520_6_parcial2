import { Component, OnInit, OnDestroy } from '@angular/core';
import { ArtistsService, Artist } from '../artists/artists.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  artists: Artist[] = [];
  loading = false;
  error: string | null = null;
  private subs = new Subscription();

  constructor(private artistsService: ArtistsService, private router: Router) {}

  ngOnInit(): void {
    this.loadArtists();
  }

  loadArtists() {
    this.loading = true;
    this.error = null;
    const s = this.artistsService.getArtists().subscribe(
      data => { this.artists = data || []; this.loading = false; },
      err => { this.error = 'Failed to load artists'; this.loading = false; }
    );
    this.subs.add(s);
  }

  viewBandList() {
    this.router.navigate(['/bandas']);
  }

  ngOnDestroy(): void { this.subs.unsubscribe(); }
}
