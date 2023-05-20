import { Component , OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import * as Highcharts from 'highcharts';
import { Olympic } from 'src/app/core/models/Olympic';
import { OlympicService } from 'src/app/core/services/olympic.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-result-of-country',
  templateUrl: './result-of-country.component.html',
  styleUrls: ['./result-of-country.component.scss']
})
export class ResultOfCountryComponent {
  idCountry!: number;
  nameCountry!: String;
  numberEntries!:number;
  numberMedals!:number;
  numberAthletes!:number;
  dataLine: number [][]=[];
  olympics$!: Observable<Olympic[]>;
  Highcharts = Highcharts;
  

  constructor(private olympicService: OlympicService, private route:ActivatedRoute) {    }

  ngOnInit(){
    const countryId:number = +this.route.snapshot.params['id'];
    this.idCountry = countryId;
    this.olympics$ = this.olympicService.getOlympics();
    this.olympics$.forEach(value=>{
      for (var i=0; i<value.length;i++){
        if(this.idCountry == value[i].id){
          this.nameCountry = value[i].country;
          this.numberEntries = this.olympicService.getNumberJO(value[i].participations);
          this.numberMedals = this.olympicService.getNumberMedals(value[i].participations);
          this.numberAthletes = this.olympicService.getNumberAthletes(value[i].participations);
          this.dataLine = this.olympicService.getArrayDataLine(value[i].participations);
        }
      } 
      this.linechart.series[0].data = this.dataLine;
      console.log(this.dataLine.toString());
      Highcharts.chart('container',this.linechart);       
    });
  }

  public linechart: any = {
    chart: {
      type: 'line'
    },
    title: {
      text: ''
    },
    xAxis: {
      accessibility: {
        rangeDescription: 'Year'
      }
    }, 
    yAxis: {
      title: {
        text: 'Number of Medals'
      }
    },
    tooltip: {
      backgroundColor: '#04828E',
      style:{
        color:'#ebebeb',
        fontFamily: 'Segoe UI',
        fontSize: '1 em!'
      }
    },
    series: [{
      name: 'Number of Medals',
      data: [] 
     }],
  
    responsive: {
      rules: [{
        condition: {
          maxWidth: 500
        },
        chartOptions: {
          legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom'
          }
        }
      }]
    }
  }
}

