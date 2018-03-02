import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ListingmemberService} from '../../services/listingmember.service';
import {ActivitiesService} from '../../services/activities.service';
import {forEach} from '@angular/router/src/utils/collection';
import {FinancialService} from '../../services/financial.service';

@Component({selector: 'app-dashboard', templateUrl: './dashboard.component.html', styleUrls: ['./dashboard.component.css'], encapsulation: ViewEncapsulation.None})
export class DashboardComponent implements OnInit {

    constructor(private listemembre: ListingmemberService, private activiteService: ActivitiesService, private bilanService: FinancialService) {}

    public ok: boolean = false;
    public okMoney: boolean = false;
    public membres = [];
    public monney: any;
    public activities = [];
    public nbActivity: any;
    public barChartOptions: any = {
        scaleShowVerticalLines: false,
        responsive: true,
        scales: {
            yAxes: [
                {
                    id: 'y-axis-1',
                    type: 'linear',
                    position: 'left',
                    ticks: {
                        min: 0,
                        max: 20
                    }
                }
            ]
        }
    };
    public barChartLabels: string[] = ['Activites'];
    public barChartType: string = 'bar';
    public barChartLegend: boolean = true;
    public barChartData: any[];

    public chartColors : any[] = [
        {
            backgroundColor: ["#5cb85c", "red", "#FAFFF2", "#FFFCC4", "#B9E8E0"]
        }
    ];

    public doughnutChartLabels: string[] = ['Rentrée', 'Sortie'];
    public doughnutChartData: any = [];
    public doughnutChartType: string = 'doughnut';
    public color = 'primary';
    public mode = 'indeterminate';

    ngOnInit() {
        this
            .listemembre
            .getData()
            .subscribe(membres => {
                this.membres = membres;
            })
        this
            .bilanService
            .getMoney()
            .subscribe(monney => {
                this.monney = monney;
                const arr = Object
                    .keys(monney)
                    .map(function (key) {
                        return monney[key];
                    });
                this
                    .doughnutChartData
                    .push(arr);

                this.okMoney = true;

            })

        this
            .activiteService
            .getData()
            .subscribe(activities => {
                this.barChartData = [];
                this.nbActivity = activities;

                activities.forEach(activite => {
                   this.barChartData =  [...this.barChartData, {data: [activite.membres.length], label: activite.name}];
                });
                this.ok = true;
            });

    }

}
