import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactComponent } from './contact/contact.component';
import { HomeViewComponent } from './home/home-view/home-view.component';
import { AboutComponent } from './about/about.component';
import { CatalogServicesComponent } from './catalog-services/catalog-services.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeViewComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'catalog', component: CatalogServicesComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
