import { Component, OnInit } from '@angular/core';
import { WorkoutService } from "../workout.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

  // the Home component get the actual data from the WorkoutService.

export class HomeComponent implements OnInit {

  // Проблема может быть здесь !!!
  public joggingData: Array<any> = [];
  public currentJogging: any;

  constructor(private workoutService: WorkoutService) {

    //  Home component is subscribed to any changes made by the workoutService.get() method,
    // and when new changed data is received, to store it to this.joggingData.
    workoutService.get().subscribe((data: any) => this.joggingData = data);
  }

  ngOnInit(): void {
  }

}
