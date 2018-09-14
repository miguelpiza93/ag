import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeAboutComponent } from './home-about/home-about.component';
import { BannerAreaComponent } from './banner-area/banner-area.component';
import { HomeServicesComponent } from './home-services/home-services.component';
import { HomeVideoComponent } from './home-video/home-video.component';
import { HomeReviewComponent } from './home-review/home-review.component';
import { HomeBlogComponent } from './home-blog/home-blog.component';
import { HomeFooterComponent } from './home-footer/home-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeAboutComponent,
    BannerAreaComponent,
    HomeServicesComponent,
    HomeVideoComponent,
    HomeReviewComponent,
    HomeBlogComponent,
    HomeFooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
