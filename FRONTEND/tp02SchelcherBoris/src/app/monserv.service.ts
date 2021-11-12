import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Produit } from '../../shared/models/produit';

@Injectable({
  providedIn: 'root'
})
export class MonservService {

  constructor(private httpClient: HttpClient) { }

  public getCatalogue(): Observable<Array<Produit>> {
    return this.httpClient.get<Array<Produit>>(environment.baseUrl);
  }
}
