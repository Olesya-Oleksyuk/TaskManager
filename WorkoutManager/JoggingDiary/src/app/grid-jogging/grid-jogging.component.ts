import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-jogging',
  templateUrl: './grid-jogging.component.html',
  styleUrls: ['./grid-jogging.component.css']
})
export class GridJoggingComponent implements OnInit {


  // the GridJogging component gets the data as an input parameter named - [joggingData].
  //     We will get the value of it through "jogginData" variable defined in the home.component,
  //     which interacts with the service in order to fetch the data.
  //
  //              <app-grid-jogging [joggingData]="joggingData"></app-grid-jogging>

  @Input()
    joggingData: Array<any> = [];

  constructor() { }

  ngOnInit(): void {
  }

}
