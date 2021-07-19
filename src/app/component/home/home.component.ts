import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(private dservice:ServiceService) { }

  NewConfirmed:Number;
  TotalConfirmed:Number;
  NewDeaths:Number;
  TotalDeaths:Number;
  TotalRecovered:Number;
  NewRecovered:Number;
  Gdata:any;
dataTable=[];
primary:any;
state:any;
helpline:any;
// 
  ngOnInit(): void {

this.dservice.getHelp()
.subscribe(d=>{
  // console.log("nsjdsjsjdsjdsjdsd")
  // console.log(d);
  this.primary=(d as any).data.contacts.primary;
  this.state=(d as any).data.contacts.regional;
  (this.state as any).splice(0,0,{loc:"Select State"});
  // console.log("data");
  console.log(this.primary,this.state);
})

    // this.dservice.getWholeData()
    // .subscribe(
    //   { next:
    //     d=>{
    //       console.log(d);
    //       this.NewConfirmed=(d as any).Global.NewRecovered;
    //       this.TotalConfirmed=(d as any).Global.TotalConfirmed.toLocaleString('en-IN');
    //       this.NewDeaths=(d as any).Global.NewDeaths;
    //       this.TotalDeaths=(d as any).Global.TotalDeaths.toLocaleString('en-IN');
    //       this.NewRecovered=(d as any).Global.NewRecovered;
    //       this.TotalRecovered=(d as any).Global.TotalRecovered.toLocaleString('en-IN');
    //       console.log(this.TotalDeaths);
    
    //       this.Gdata=(d as any).Countries;
    // let up=[];
    //       for( let i of this.Gdata)
    //       {
    // up.push([i.Country,i.TotalConfirmed,i.TotalDeaths,i.TotalRecovered]);
    //       }
    //       this.Gdata=up;
    //       this.Gdata.sort((a,b)=>b[1]-a[1]); // sorting on decesding totalconfirm
    //       console.log("gdata");
    //       console.log(this.Gdata);
    
    //       this.initChart();
    
    //   },

    //  complete : ()=>{
    //        console.log("done");
    //       }

      
    // })

    this.dservice.getTotal().subscribe(d=>{
      // console.log(d);
      
      this.TotalConfirmed=(d as any).TotalConfirmed.toLocaleString('en-IN');
      this.TotalDeaths=(d as any).TotalDeaths.toLocaleString('en-IN');
      this.TotalRecovered=(d as any).TotalRecovered.toLocaleString('en-IN');
    })
  }
  


  // pieChart: GoogleChartInterface = {
  //   chartType: 'PieChart'
  // }
  // columnChart: GoogleChartInterface = {
  //   chartType: 'ColumnChart'
  // }


  // doughnutChartLabels: Label[] = ['BMW', 'Ford', 'Tesla'];
  // doughnutChartData: MultiDataSet = [
  //   [55, 25, 20]
  // ];
  // doughnutChartType: ChartType = 'doughnut';




  initChart()
  {
   

    




  //  this.dataTable.push(["Country","Confirmed Cases"]);

  //  for(let i=0;i<25;i++)
  //  {
  //   //  if(parseInt(i.TotalConfirmed) > 250000)
  //   //  {
  //    this.dataTable.push([this.Gdata[i][0],this.Gdata[i][1]]);
  //   //  }
  //  }
  //  console.log(this.Gdata.slice(50));

  //   this.pieChart={
  //     chartType: 'PieChart',
  //     dataTable: this.dataTable,
  //     //firstRowIsData: true,
  //     options: {
  //       height:500
  //     },
  //   };

  //   this.columnChart={
  //     chartType: 'ColumnChart',
  //     dataTable: this.dataTable,
  //     //firstRowIsData: true,
  //     options: {
  //       height:500
  //     },
  //   };


  }

  HelpLine(val)
  {
    this.helpline=val;
    console.log(val);
  }


  }

  




