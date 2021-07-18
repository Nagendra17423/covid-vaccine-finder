import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { CountryComponent } from "./component/country/country.component";
import { HomeComponent } from "./component/home/home.component";
import { HospitalComponent } from "./component/hospital/hospital.component";
import { VaccineComponent } from "./component/vaccine/vaccine.component";
import { VaccinebydistrictComponent } from "./component/vaccine/vaccinebydistrict/vaccinebydistrict.component";
import { VaccinebypincodeComponent } from "./component/vaccine/vaccinebypincode/vaccinebypincode.component";
import { ErrorComponent } from "./error/error.component";

const route:Routes=[
{path:"",component:HomeComponent},
{path:"vaccine",component:VaccineComponent,
children:[
    {path:"pincode", component:VaccinebypincodeComponent},
    {path:"district", component:VaccinebydistrictComponent},

]},
{path:"country",component:CountryComponent},
{path:"hospital",component:HospitalComponent},
{path:"not-found",component:ErrorComponent},
{path:"**",redirectTo:"/not-found"}

]
@NgModule({
    imports:[RouterModule.forRoot(route)],
    exports:[RouterModule]
})
export class CustomRouting {}