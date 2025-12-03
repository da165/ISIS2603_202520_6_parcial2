import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Banda } from "./models/models";    
@Injectable({
  providedIn: "root",
})
export class BandaService {
  private apiUrl = "http://localhost:3000/bandas";
    constructor(private http: HttpClient) {}
    getBandas(): Observable<Banda[]> {
        return this.http.get<Banda[]>(this.apiUrl);
    }
    getBandaById(id: number): Observable<Banda> {
        const url = `${this.apiUrl}/${id}`;
        return this.http.get<Banda>(url);
    }
}