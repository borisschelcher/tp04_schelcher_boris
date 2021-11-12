import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormComponent } from './routage/form/form.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RecapDataComponent } from './routage/recap-data/recap-data.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './routage/home/home.component';
import { ProductComponent } from './routage/product/product.component';
import { NotFoundComponent } from './routage/not-found/not-found.component';
import { RefactorNumberPipe } from './refactor-number.pipe';
import { SearchProductPipe } from './search-product.pipe';
import { DetailComponent } from './routage/detail/detail.component';
import { PanierComponent } from './routage/panier/panier.component';
import { CommonModule } from '@angular/common';

const appRoutes: Routes = [
  { path: "recap-data", component: RecapDataComponent },
  { path: "form", component: FormComponent },
  { path: "product", component: ProductComponent },
  { path: "panier", component: PanierComponent },
  { path: "not-found", component: NotFoundComponent },
  { path: "", component: HomeComponent },
  { path: "**", redirectTo:'not-found' }
];
@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    FooterComponent,
    HeaderComponent,
    RecapDataComponent,
    NavbarComponent,
    HomeComponent,
    ProductComponent,
    NotFoundComponent,
    RefactorNumberPipe,
    SearchProductPipe,
    DetailComponent,
PanierComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }