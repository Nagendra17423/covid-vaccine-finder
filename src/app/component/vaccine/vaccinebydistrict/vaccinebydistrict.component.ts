import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-vaccinebydistrict',
  templateUrl: './vaccinebydistrict.component.html',
  styleUrls: ['./vaccinebydistrict.component.css']
})
export class VaccinebydistrictComponent implements OnInit {

  state:any;
  district:any;
  day;
  month;
  year;
  data;
  constructor(private dservice:ServiceService) { }

  ngOnInit(): void {
    this.dservice.getState().subscribe(
      (data)=>{
        this.state=(data as any).states;
        this.state.unshift({state_name:"Select State"});
        console.log(this.state);
      }
    )

  }

  lookDistrict(scode:string)
  {

    

    this.district=[];
    console.log(scode);
    this.dservice.getDistrict(scode).subscribe(
      d=>{
        console.log(d);
        this.district=(d as any).districts;
        this.district.unshift({district_name:"Select District"});
        console.log(this.district);
      }
    )
  }

  submit(state,district)
  {
    var d=new Date();
    this.day=d.getDate();
    this.month=d.getMonth()+1;
    this.year=d.getFullYear();

    console.log("submitted");
    console.log(state,district);
    this.dservice.getVaccineByDistrict(district,this.day+"-"+this.month+"-"+this.year).subscribe(
      d=>{
        console.log(d);
        this.data=(d as any).sessions;

      }
    )
  }



}
