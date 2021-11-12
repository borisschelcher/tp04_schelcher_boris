import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { DeleteProduit } from 'shared/actions/product-action';
import { Produit } from 'shared/models/produit';
import { ProductState} from 'shared/states/product-state';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})

export class PanierComponent implements OnInit {

  constructor( private store : Store) { }
  @Select(ProductState.getNbProduct)
  nb$!: Observable<number>;


  @Select(ProductState.getListeProducts)
  list$!: Observable<Produit[]>;

  ngOnInit(): void {
  }
  deleteProduct(produit : Produit){
    this.store.dispatch(new DeleteProduit(produit));
  }
  
}
