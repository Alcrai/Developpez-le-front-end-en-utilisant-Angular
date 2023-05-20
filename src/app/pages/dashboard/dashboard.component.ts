import { Component ,OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import * as Highcharts from 'highcharts';
import { OlympicService } from 'src/app/core/services/olympic.service';
import { Olympic } from 'src/app/core/models/Olympic';
import { DataPie } from 'src/app/core/models/DataPie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
    numberJO!: number;
    numberCountries:number=0;
    datasPie: DataPie[]=[];
    olympics$: Observable<Olympic[]> = this.olympicService.getOlympics();
    constructor(private olympicService: OlympicService, private router:Router) {    }

    ngOnInit(){
        this.olympics$.forEach(value=>{
            for (var i=0; i<value.length;i++){
                this.numberCountries++;
                this.numberJO= this.olympicService.getNumberJO(value[i].participations);
                this.datasPie.push(new DataPie(value[i].country,this.olympicService.getNumberMedals(value[i].participations),'country/'+value[i].id));
            }
            Highcharts.chart('container', this.options);
        });
       
      }

   public options: any = {
    colors: ['#7B4E59', '#9194c3', '#9880A2', '#BFE0F1', '#B8CCE7', '#945F65'],
      chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: true,
          type: 'pie'
      },
      style: {
        fontFamily: 'Segoe UI'
    },
      title: {
          text: ''
      },
      tooltip: {
        backgroundColor: '#04828E',
        useHTML: true,
        pointFormat: '<span> <img class="medaille" src="../assets/medaille.png"> {point.y}</span>',
        style:{
          color:'#ebebeb',
          fontFamily: 'Segoe UI',
          fontSize: '1 em'
        }
      },
      plotOptions: {
          pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                  enabled: true,
                  format: '{point.name}',
                  style:{
                    fontSize: 20,
                    fontWeight: 'normal'
                  }
              },
              point: {
                events: {
                  click:function (event: any) {
                    window.location.href = event.point.url;
                  }.bind(this)
                }
              } }
              },
      series: [{
          colorByPoint: true,
          data: this.datasPie
      }]
    }
  }
