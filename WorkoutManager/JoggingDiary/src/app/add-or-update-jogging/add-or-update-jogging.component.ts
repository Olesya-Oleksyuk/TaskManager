import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-or-update-jogging',
  templateUrl: './add-or-update-jogging.component.html',
  styleUrls: ['./add-or-update-jogging.component.css']
})
export class AddOrUpdateJoggingComponent implements OnInit {

  // In Angular, in order to raise an event we need to have an Output Parameter.
  // This output parameter will return an EventEmitter. 
  @Output() joggingCreated = new EventEmitter<any>();

  // We need the Input Parameter because we use the same component for adding and updating.
  // So if the parameter passed here has an ID, then we are dealing with an update operation,
  // otherwise it is a create operation. 
  @Input() joggingInfo: any;

    constructor() {
    this.clearJoggingInfo();
    console.log(this.joggingInfo.date);
  }

  ngOnInit(): void {
  }

  private clearJoggingInfo = () => {
    // Create an empty jogging object
    this.joggingInfo = {
      id: undefined,
      date: '',
      distanceInMeters: 0,
      timeInSeconds: 0
    };
  };

  // Метод обрабатывающий событие клика (click)
    public addOrUpdateJoggingRecord =  (event: any) => {
    this.joggingCreated.emit(this.joggingInfo);
    this.clearJoggingInfo();
  };

}
