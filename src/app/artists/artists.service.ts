import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Artist {
  id: number;
  name: string;
  image?: string;
}

@Injectable({ providedIn: 'root' })
export class ArtistsService {
  private apiUrl = 'http://localhost:8080/artists';

  constructor(private http: HttpClient) {}

  getArtists(): Observable<Artist[]> {
    return this.http.get<Artist[]>(this.apiUrl);
  }

  getArtist(id: number): Observable<Artist> {
    return this.http.get<Artist>(`${this.apiUrl}/${id}`);
  }
}
