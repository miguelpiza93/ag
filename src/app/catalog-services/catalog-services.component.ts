import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services/services/services.service';
import { Category } from '../model/category';
import { Service } from '../model/service';

@Component({
  selector: 'app-catalog-services',
  templateUrl: './catalog-services.component.html',
  styleUrls: ['./catalog-services.component.css']
})
export class CatalogServicesComponent implements OnInit {

  categories: Category[];
  services: Service[];

  constructor(
    private servicesService: ServicesService
  ) { }

  ngOnInit() {
    this.getCategories();
    this.getServices();
  }

  getCategories(): void {
    this.servicesService.getCategories()
      .subscribe(categories => this.categories = categories);
  }

  getServices(): void {
    this.servicesService.getServices()
    .subscribe(services => this.services = services);
  }
}
