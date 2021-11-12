import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MonservService } from '../../monserv.service';
import { Produit } from '../../../../shared/models/produit';
import { Store } from '@ngxs/store';
import { AddProduit } from 'shared/actions/product-action';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{

  constructor(private monservService: MonservService, private store : Store) { }

  produit$?: Observable<Array<Produit>>;
  ngOnInit(): void {
    this.produit$ = this.monservService.getCatalogue();
  }
  addProduct(produit : Produit){
    this.store.dispatch(new AddProduit(produit));
  }
}
  