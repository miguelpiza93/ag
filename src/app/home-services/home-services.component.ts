import { Component, OnInit } from '@angular/core';
import { Service } from '../model/service';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-home-services',
  templateUrl: './home-services.component.html',
  styleUrls: ['./home-services.component.css']
})
export class HomeServicesComponent implements OnInit {
  ourServices: Service[];

  constructor(private servicesService: ServicesService) { }

  ngOnInit() {
    this.getServices();
  }

  getServices(): void {
    this.servicesService.getHomeServices()
      .subscribe(homeServices => this.ourServices = homeServices)
  }

}
