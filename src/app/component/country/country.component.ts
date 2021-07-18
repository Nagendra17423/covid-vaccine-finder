import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  country:Array<string>;
  TotalConfirmed:string;
    TotalDeaths:string;
    TotalRecovered:string;
    last:{};
    data:any;
  
  
   show:number=0;
  
    constructor(private dservice:ServiceService) { }
  
    ngOnInit(): void {
  
    this.dservice.getCountry().subscribe(data=>{
  this.country=data;
  this.country.sort();
  this.country.shift();
  this.country.splice(0,0,"PLZ-SELECT-COUNTRY");
      })
    }
  
    Update(country)
    {
      this.show=1;
      this.dservice.getCountryCount(country).subscribe(data=>{
        console.log(data);
        this.data=data;
        this.last=data[Object.keys(data)[Object.keys(data).length-1]];
        if((data as any).length ==0 )
        {
        this.TotalConfirmed="NA";
        this.TotalDeaths="NA";
        this.TotalRecovered="NA";
  
        }
  else if( (this.last as any).Confirmed!=="" 
  && (this.last as any).Deaths!=="" 
  && (this.last as any).Recovered !== "" )
  {
    
        this.TotalConfirmed=(this.last as any).Confirmed.toLocaleString('en-IN') ;
        this.TotalDeaths=(this.last as any).Deaths.toLocaleString('en-IN') ;
        this.TotalRecovered=(this.last as any).Recovered.toLocaleString('en-IN');
  }
      console.log(this.TotalConfirmed,this.TotalDeaths,this.TotalRecovered);
  
      })
    }
  
  
              
  
  
  
  
    
  }
  
  
  