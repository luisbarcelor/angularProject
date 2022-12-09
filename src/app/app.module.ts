import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './views/nav-bar/nav-bar.component';
import { HomeComponent } from './views/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { AboutComponent } from './views/about/about.component';
import { FooterComponent } from './views/footer/footer.component';
import { FeaturedComponent } from './views/featured/featured.component';
import { TipsComponent } from './views/tips/tips.component';
import { ProductsComponent } from './views/products/products.component';
import { BannerComponent } from './views/banner/banner.component';
import { HttpClientModule } from "@angular/common/http";
import { RecentOpearationsComponent } from './views/recent-opearations/recent-opearations.component';
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    NotFoundComponent,
    AboutComponent,
    FooterComponent,
    FeaturedComponent,
    TipsComponent,
    ProductsComponent,
    BannerComponent,
    RecentOpearationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
