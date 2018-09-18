import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HomeModule } from './home/home.module';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data-service';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { AppRoutingModule } from './/app-routing.module';
import { AboutComponent } from './about/about.component';
import { CatalogServicesComponent } from './catalog-services/catalog-services.component';

import { ServicePipe } from './catalog-services/service-pipe';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    AboutComponent,
    CatalogServicesComponent,
    ServicePipe
  ],
  imports: [
    BrowserModule,
    HomeModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
