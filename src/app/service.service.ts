import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from"rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  getWholeData()
  {
    const url="https://api.covid19api.com/summary";
    return this.http.get(url)
    .pipe(map(data=>{
      return data;
      
    }));
  }

  getCountry()
  {
    const url="https://api.covid19api.com/countries";
    return this.http.get(url)
    .pipe(map(data=>{
      let d=[];
     for( let [key,val] of Object.entries(data))
     {
       d.push(val.Country);
     }
      return d;
      
    }));

  }

  getCountryCount(country:string)
  {
    const url="https://api.covid19api.com/country/";
    return this.http.get(`${url}${country}`)
    .pipe(map(data=>{
      return data;
      
    }));

  }

  getVaccineByPincode(pincode:string,date:string)
  {
  let params=new HttpParams()
  .set("pincode",pincode)
  .set("date",date);
  console.log(pincode,date);
  console.log("param "+params)
    const url="https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin";
    return this.http.get(url,{params})
    .pipe(map(d=>{
      return d;
    }));

  }

  getState()
  {
    const url="https://cdn-api.co-vin.in/api/v2/admin/location/states";
    return this.http.get(url);
  }

  getDistrict(scode:string)
  {
    let url="https://cdn-api.co-vin.in/api/v2/admin/location/districts/";
    return this.http.get(`${url}${scode}`);
  }

  getVaccineByDistrict(dcode,date)
  {
    let url="https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict";
    // ?district_id=512&date=31-03-2021
    let params=new HttpParams()
    .set("district_id",dcode)
    .set("date",date);
    
    return this.http.get(url,{params});


  }

  getTotal()
  {
    const url="https://api.covid19api.com/world/total";
    return this.http.get(url);
  }

  getHelp()
  {
    const url="https://api.rootnet.in/covid19-in/contacts";
    return this.http.get(url);
  }

  getCollege()
  {

    const url="https://api.rootnet.in/covid19-in/hospitals/medical-colleges";
    return this.http.get(url);
  }

  getStateBeds()
  {
    const url="https://api.rootnet.in/covid19-in/hospitals/beds";
    return this.http.get(url);
  }

}
