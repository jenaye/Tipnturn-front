import { Component, OnInit } from '@angular/core';
import { ListingmembreService } from '../../services/listingmembre.service';
import { ActivitiesService } from '../../services/activities.service';
// import Chart from 'chart.js';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

    constructor(private listemembre: ListingmembreService,
                private activiteService: ActivitiesService) { }

    public membres = [];
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
        {data: [11], label: 'Cours 1'},
        {data: [8], label: 'Atelier 1'},
        {data: [10], label: 'Cours 2'},
        {data: [12], label: 'Atelier 2'}
    ];

    public chartColors: any[] = [
        {
            backgroundColor:["#5cb85c", "red", "#FAFFF2", "#FFFCC4", "#B9E8E0"]
        }];

    public doughnutChartLabels:string[] = ['Rentrée', 'Sortie'];
    public doughnutChartData:number[] = [1003, 13];
    public doughnutChartType:string = 'doughnut';

    ngOnInit() {
        this.listemembre.getData().subscribe(membres => {
            this.membres = membres;
        })

        this.activiteService.getHowManyMembre().subscribe(activities => {
           this.nbActivity = activities;
            console.log(activities)
        });
     //   console.log(this.barChartData[0].data[0]);

    }

}
