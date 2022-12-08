import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './views/about/about.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { HomeComponent } from "./views/home/home.component";
import {FeaturedComponent} from "./views/featured/featured.component";
import {TipsComponent} from "./views/tips/tips.component";
import {ProductsComponent} from "./views/products/products.component";
import {RecentOpearationsComponent} from "./views/recent-opearations/recent-opearations.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'featured', component: FeaturedComponent },
  { path: 'tips', component: TipsComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'recent-operations', component: RecentOpearationsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})

export class AppRoutingModule { }
