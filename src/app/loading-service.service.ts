import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoadingServiceService {
  constructor(private httpClient:HttpClient) { }

  getBusData() {
    return this.httpClient.get('http://transport.opendata.ch/v1/stationboard?station=Waldegg, Birmensdorferstrasse');
  }

  getTrainData() {
    return this.httpClient.get('http://transport.opendata.ch/v1/stationboard?station=Winterthur, Hauptbahnhof');
  }

  getStationData() {
    return this.httpClient.get('https://api3.geo.admin.ch/rest/services/all/MapServer/identify?\n' +
      'geometry=2600000,1200000&\n' +
      'mapExtent=0,0,100,100&\n' +
      'imageDisplay=100,100,100&\n' +
      'geometryFormat=geojson&\n' +
      'geometryType=esriGeometryPoint&\n' +
      'lang=de&\n' +
      'layers=all:ch.bfe.ladestellen-elektromobilitaet&\n' +
      'returnGeometry=true&\n' +
      'tolerance=300&\n' +
      'sr=2056');
  }
}
