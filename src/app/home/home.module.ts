import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeViewComponent } from './home-view/home-view.component';
import { HomeAboutComponent } from './home-about/home-about.component';
import { BannerAreaComponent } from './banner-area/banner-area.component';
import { HomeServicesComponent } from './home-services/home-services.component';
import { HomeVideoComponent } from './home-video/home-video.component';
import { HomeReviewComponent } from './home-review/home-review.component';
import { HomeBlogComponent } from './home-blog/home-blog.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HomeViewComponent,
    HomeAboutComponent,
    BannerAreaComponent,
    HomeServicesComponent,
    HomeVideoComponent,
    HomeReviewComponent,
    HomeBlogComponent
  ],
  exports: [
    HomeViewComponent,
    HomeAboutComponent,
    BannerAreaComponent,
    HomeServicesComponent,
    HomeVideoComponent,
    HomeReviewComponent,
    HomeBlogComponent
  ]
})
export class HomeModule { }
