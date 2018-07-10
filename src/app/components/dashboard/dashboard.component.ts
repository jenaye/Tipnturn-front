import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ListingmemberService} from '../../services/listingmember.service';
import {ActivitiesService} from '../../services/activities.service';
import {FinancialService} from '../../services/financial.service';
import {UsersService} from '../../services/users.service';

@Component({selector: 'app-dashboard', templateUrl: './dashboard.component.html', styleUrls: ['./dashboard.component.css'], encapsulation: ViewEncapsulation.None})
export class DashboardComponent implements OnInit {

    constructor(private listemembre: ListingmemberService,
                private activiteService: ActivitiesService,
                private bilanService: FinancialService,
                private usersService: UsersService
    ) {}

    public ok: boolean = false;
    public okMoney: boolean = false;
    public nbmembres : any;
    public nbAdmin :number =0;
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
            backgroundColor: ["#5cb85c", "#DD3333", "#FAFFF2", "#FFFCC4", "#B9E8E0"]
        }
    ];

    public barChartColors: Array<any> =
        [
            '#5cb85c',
            '#65C6BB',
            '#1BBC9B',
            '#f0ad4e',
            '#d9534f',
            '#5cb85c',
            '#f0ad4e'
        ];

    public doughnutChartLabels: string[] = ['Rentrée', 'Sortie'];
    public doughnutChartData: any = [];
    public doughnutChartType: string = 'doughnut';
    public color = 'warn';
    public mode = 'indeterminate';

    ngOnInit() {
        this.usersService.count().subscribe(res=>{
            this.nbAdmin = <number>res;
        })
        this.listemembre.getData().subscribe(res=>{
            this.nbmembres=  res['hydra:totalItems'];
        })
        this.bilanService.getMoney().subscribe(monney => {

           this.monney = monney;
                const arr = Object.keys(monney).map(function (key) {
                        return monney[key];
                    });
                this.doughnutChartData.push(arr);
                this.okMoney = true;
            })

        this.activiteService.getData().subscribe(activities => {

                this.barChartData = [];
                this.nbActivity = activities['hydra:totalItems'];

                activities['hydra:member'].forEach(activite => {
                   this.barChartData =  [...this.barChartData, {data: [activite.membres.length], label: activite.name}];
                });
                this.ok = true;
            });

    }

}
