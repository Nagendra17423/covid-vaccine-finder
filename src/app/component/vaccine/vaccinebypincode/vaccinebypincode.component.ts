import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-vaccinebypincode',
  templateUrl: './vaccinebypincode.component.html',
  styleUrls: ['./vaccinebypincode.component.css']
})
export class VaccinebypincodeComponent implements OnInit {
  day:number;
  month:number;
  year:number;
  data;
    constructor(private dservice:ServiceService) { }
  
    ngOnInit(): void {
     
    }
  
    submit(pincode)
    {
      this.data=[];
      console.log(" value from html "+pincode);
      var d=new Date();
      this.day=d.getDate();
      this.month=d.getMonth()+1;
      this.year=d.getFullYear();
          console.log(this.day+"-"+this.month+"-"+this.year);
          this.dservice.getVaccineByPincode(pincode,this.day+"-"+this.month+"-"+this.year)
          .subscribe(d=>{
            console.log(d);
            // this.data=(d as any);
            for( let i of ((d as any).sessions as any))
            {
              this.data.push({...i});
            }
            console.log(this.data);
          })
  
  
    }
  
  }
  