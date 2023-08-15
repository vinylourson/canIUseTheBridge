import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private REST_API_SERVER = "https://opendata.bordeaux-metropole.fr/explore/dataset/previsions_pont_chaban/download?format=json&timezone=Europe/Berlin&use_labels_for_header=false";

  constructor(private httpClient: HttpClient) { }

  public sendGetRequest(){
    return this.httpClient.get(this.REST_API_SERVER);
    // filter lifts that are equal or greater than today
  }
}
