import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Banda } from "../bandas/models/models";
import { album } from "../album/models/models";
@Injectable({
  providedIn: "root",
})
export class AlbumService {
  private apiUrl = "http://localhost:3000/albums"; 
    constructor(private http: HttpClient) {}
    getAlbums(): Observable<album[]> {
        return this.http.get<album[]>(this.apiUrl);
    }
    getAlbumById(id: number): Observable<album> {
        const url = `${this.apiUrl}/${id}`;
        return this.http.get<album>(url);
    }   
}