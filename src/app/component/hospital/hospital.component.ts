import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.component.html',
  styleUrls: ['./hospital.component.css']
})
export class HospitalComponent implements OnInit {

  state:any;
  college={};
  beds={};
  urbanbeds=0;
  urbanhos=0;
  ruralbeds=0;
  ruralhos=0;
  table;
  hashmap=new Map();
    constructor(private dservice:ServiceService) { }
  
    ngOnInit(): void {
      this.dservice.getCollege().subscribe(d=>{
  this.college=(d as any).data.medicalColleges;
  console.log("colleges");
  console.log(this.college);
  let a;
  for(let i of (this.college as  any))
  {
    
    if(this.hashmap.has(i.state))
    {
 a=[...this.hashmap.get(i.state),i];
    }
else
{
 a=[{...i}];
}
console.log(i.state,a);
    (this.hashmap as any).set(i.state,a);
  }
  console.log(this.hashmap);
      })
  
  
      this.dservice.getStateBeds().subscribe(d=>{
  this.beds=(d as any).data.regional;
  (this.beds as any).splice(0,0,{state:"Select State"});
  console.log("beds",this.beds);
  
      })
    }
  
    Update(val)
    {
      this.table=[];
     this.state="show";
     for(let i in  this.beds)
     {
       if((this.beds as any)[i].state=== val)
       {
         this.ruralbeds=(this.beds as any)[i].ruralBeds.toLocaleString('en-IN');
         this.ruralhos=(this.beds as any)[i].ruralHospitals.toLocaleString('en-IN');
         this.urbanbeds=(this.beds as any)[i].urbanBeds.toLocaleString('en-IN');
         this.urbanhos=(this.beds as any)[i].urbanHospitals.toLocaleString('en-IN');
         break;
       }
  
     }
  let k=0;
  // console.log(val,);
  //    for( let i in this.college)
  //    {
  //      console.log((this.college as any)[i].state,val);
  //     if((this.college as any)[i].state.toLowerCase().localeCompare(val.toLowerCase())==0)
  //     {
  //       console.log(val);
  //     k=1;
  // this.table.push({admissionCapacity:(this.college as any)[i].admissionCapacity,
  //   city:(this.college as any)[i].city,hospitalBeds:(this.college as any)[i].hospitalBeds,
  //   name:(this.college as any)[i].name,ownership:(this.college as any)[i].ownership});
  //     }
  //     else if(k==1)
  //     break;
  //    }
  this.table=this.hashmap.get(val);
      console.log(this.table);
    }
  
  }
  