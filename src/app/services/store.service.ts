import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Store } from '../models/store.model';


@Injectable({
  providedIn: 'root'
})
export class StoresService {
  private readonly apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getAllStores(): Observable<Store[]> {
    const token = localStorage.getItem('token');
    const headers = { Authorization: `Bearer ${token}` };
    const stores= this.http.get<Store[]>(`${this.apiUrl}/store` , { headers });
    return stores;
  }
}