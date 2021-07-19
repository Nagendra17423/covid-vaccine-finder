import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-card-dash-board',
  templateUrl: './data-card-dash-board.component.html',
  styleUrls: ['./data-card-dash-board.component.css']
})
export class DataCardDashBoardComponent implements OnInit {

 
  @Input() TotalRecovered="";
@Input() TotalConfirmed="";
@Input() TotalDeaths="";
  constructor() { }

  ngOnInit(): void {
  }

}
