import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Service } from '../model/service'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private servicesUrl = 'api/services'; //URL to web api
  private homeservicesUrl = 'api/homeServices'; //URL to web api

  /**Get services from the server */
  getServices(): Observable<Service[]> {
    return this.http.get<Service[]>(this.servicesUrl);
  }

  /**Get services from the server */
  getHomeServices(): Observable<Service[]> {
    return this.http.get<Service[]>(this.homeservicesUrl);
  }

  constructor(
    private http: HttpClient
  ) { }
}
