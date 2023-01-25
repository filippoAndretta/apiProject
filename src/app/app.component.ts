import { Component } from '@angular/core';
import {LoadingServiceService} from "./loading-service.service";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ApiProject';
  busData: any;
  busWData: any;
  stationData: any;
  constructor(private loadingServiceService: LoadingServiceService) { }

  ngOnInit(){
    this.loadingServiceService.getBusData().subscribe(res => {
      this.busData = res;
    })

    this.loadingServiceService.getTrainData().subscribe(res => {
      this.busWData = res;
    })

    this.loadingServiceService.getStationData().subscribe(res => {
      this.stationData = res;
    })
  }
}
