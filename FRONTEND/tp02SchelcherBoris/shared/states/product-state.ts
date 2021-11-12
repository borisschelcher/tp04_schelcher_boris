import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { AddProduit, DeleteProduit } from '../actions/product-action';
import { ProductStateModel } from './product-state-model';
@State<ProductStateModel>({
  name: 'produits',
  defaults: {
    produits: [],
  },
})
@Injectable()
export class ProductState {
  @Selector()
  static getNbProduct(state: ProductStateModel) {
    return state.produits.length;}
  @Selector()
  static getListeProducts(state: ProductStateModel) {
    return state.produits;
  }

  @Action(AddProduit)
  add(
    { getState, patchState }: StateContext<ProductStateModel>,
    {payload}: AddProduit
  ) {
    const state = getState();
    patchState({
      produits: [...state.produits, payload],
    });
  }

  @Action(DeleteProduit)
  delete(
    { getState, patchState }: StateContext<ProductStateModel>,
    {payload}: DeleteProduit
  ) {
    const state = getState();
    patchState({
      produits: state.produits.filter(p=>p!=payload),
    });
  }
}
