import { Component, OnInit } from '@angular/core';
import { ListingmembreService } from '../../services/listingmembre.service';
import { ActivitiesService } from '../../services/activities.service';
import {forEach} from "@angular/router/src/utils/collection";
import {BilanService} from "../../services/bilan.service";

// import Chart from 'chart.js';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

    constructor(private listemembre: ListingmembreService,
                private activiteService: ActivitiesService,
                private bilanService: BilanService) { }
    public ok: boolean = false;
    public okMoney: boolean = false;
    public membres = [];
    public monney:any;
    public activities = [];
    public nbActivity:any;
    public barChartOptions: any = {
        scaleShowVerticalLines: false,
        responsive: true,
        scales: {
            yAxes: [{id: 'y-axis-1', type: 'linear', position: 'left', ticks: {min: 0, max:20}}]
        }
    };
    public barChartLabels: string[] = ['Activites'];
    public barChartType: string = 'bar';
    public barChartLegend: boolean = true;
    public barChartData: any[] = [
        {data: [], label: 'Cours 1'},
        {data: [], label: 'Atelier 1'},
        {data: [], label: 'Cours 2'},
        {data: [], label: 'Atelier 2'}
    ];

    public chartColors: any[] = [
        {
            backgroundColor:["#5cb85c", "red", "#FAFFF2", "#FFFCC4", "#B9E8E0"]
        }];

    public doughnutChartLabels:string[] = ['Rentrée', 'Sortie'];
    public doughnutChartData:any = [];
    public doughnutChartType:string = 'doughnut';

    ngOnInit() {
        this.listemembre.getData().subscribe(membres => {
            this.membres = membres;

        })
        this.bilanService.getMoney().subscribe(monney => {
            this.monney = monney;
            const arr = Object.keys(monney).map(function (key) {
                return monney[key];
            });
            this.doughnutChartData.push(arr);

            this.okMoney = true;

        })

        this.activiteService.getHowManyMembre().subscribe(activities => {
           this.nbActivity = activities;
            this.nbActivity.forEach(activite  => {
                this.barChartData[this.nbActivity.indexOf(activite)].data = [activite];
           });
            this.ok = true;
        });

    }

}
