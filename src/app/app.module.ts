import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data-service';

import { AppComponent } from './app.component';
import { HomeAboutComponent } from './home-about/home-about.component';
import { BannerAreaComponent } from './banner-area/banner-area.component';
import { HomeServicesComponent } from './home-services/home-services.component';
import { HomeVideoComponent } from './home-video/home-video.component';
import { HomeReviewComponent } from './home-review/home-review.component';
import { HomeBlogComponent } from './home-blog/home-blog.component';
import { HomeFooterComponent } from './home-footer/home-footer.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeAboutComponent,
    BannerAreaComponent,
    HomeServicesComponent,
    HomeVideoComponent,
    HomeReviewComponent,
    HomeBlogComponent,
    HomeFooterComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
