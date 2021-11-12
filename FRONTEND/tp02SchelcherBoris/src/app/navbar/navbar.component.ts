import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ProductState } from 'shared/states/product-state';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }
  @Select(ProductState.getNbProduct)
  nb$!: Observable<number>;
  ngOnInit(): void {
  }


}
