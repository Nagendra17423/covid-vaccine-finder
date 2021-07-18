import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CustomRouting } from './Custom-Routing.routing';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HomeComponent } from './component/home/home.component';
import { CountryComponent } from './component/country/country.component';
import { VaccineComponent } from './component/vaccine/vaccine.component';
import { HttpClientModule } from "@angular/common/http";
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { DataCardDashBoardComponent } from './component/data-card-dash-board/data-card-dash-board.component';
// import { HttpClient } from 'selenium-webdriver/http';
// import { Ng2GoogleChartsModule } from 'ng2-google-charts';
// import { ChartsModule } from 'ng2-charts';
import { VaccinebypincodeComponent } from './component/vaccine/vaccinebypincode/vaccinebypincode.component';
import { VaccinebydistrictComponent } from './component/vaccine/vaccinebydistrict/vaccinebydistrict.component';
import { ErrorComponent } from './error/error.component';
import { HospitalComponent } from './component/hospital/hospital.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CountryComponent,
    VaccineComponent,
    DataCardDashBoardComponent,
    VaccinebypincodeComponent,
    VaccinebydistrictComponent,
    ErrorComponent,
    HospitalComponent
  ],
  imports: [
    BrowserModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    CustomRouting,
    HttpClientModule,
    LoadingBarHttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
